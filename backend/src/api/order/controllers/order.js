/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
'use strict';

// const { sanitizeEntity } = require('strapi-utils');

const stripe = require('stripe')(process.env.STRIPE_PK);

/**
 * Given a dollar amount number, convert it to it's value in cents
 * @param number
 */
const fromDecimalToInt = (number) => parseInt(number * 100);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  /**
   * Only send back orders from you
   * @param {*} ctx
   */
  // async find(ctx) {
  //   const { user } = ctx.state;
  //   let entities;

  //   entities = await strapi.db.query('api::order.order').findMany({
  //     where: { usersId: user.id },
  //     populate: true
  //   });
  //   console.log({ entities });

  //   return { data: entities };
  // },
  /**
   * Retrieve an order by id, only if it belongs to the user
   */
  // async findOne(ctx) {
  //   const { id } = ctx.params;
  //   const { user } = ctx.state;

  //   const entity = await strapi.services.order.findOne({ id, user: user.id });
  //   return sanitizeEntity(entity, { model: strapi.models.order });
  // },

  async create(ctx) {
    const BASE_URL = ctx.request.headers.origin || process.env.FRONTEND_API_URL; //So we can redirect back

    const { cart } = ctx.request.body.data;
    if (!cart) {
      return ctx.status(400).send({ error: 'Please add a cart to body' });
    }

    //Retrieve the real product here
    // const realProduct = await strapi.services.product.findOne({
    //   id: product.id
    // });
    const realProducts = await strapi.db.query('api::cart.cart').findMany({
      where: {
        id: {
          $in: cart
        }
      },
      populate: true
    });

    // if (!realProduct) {
    //   return res.status(404).send({ error: "This product doesn't exist" });
    // }

    const { user } = ctx.state;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: realProducts?.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.book.name
            // images: [img]
          },
          unit_amount: fromDecimalToInt(item.variant.price)
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1
        },
        quantity: item.quantity
      })),
      customer_email: user.email, //Automatically added by Magic Link
      mode: 'payment',
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: BASE_URL
    });

    const newOrder = await strapi.db.query('api::order.order').create({
      data: {
        usersId: user.id,
        cart: cart,
        status: 'PLACED',
        checkout_session: session.id,
        publishedAt: new Date(),
        placedOn: new Date().toISOString()
      }
    });

    await strapi.db.query('api::cart.cart').updateMany({
      where: {
        id: {
          $in: cart
        }
      },
      data: {
        process: 'IN_ORDER'
      }
    });
    return { id: session.id, newOrder };
  }
  // async confirm(ctx) {
  //   const { checkout_session } = ctx.request.body;
  //   console.log('checkout_session', checkout_session);
  //   const session = await stripe.checkout.sessions.retrieve(checkout_session);
  //   console.log('verify session', session);

  //   if (session.payment_status === 'paid') {
  //     //Update order
  //     const newOrder = await strapi.services.order.update(
  //       {
  //         checkout_session
  //       },
  //       {
  //         status: 'paid'
  //       }
  //     );

  //     return newOrder;
  //   } else {
  //     ctx.throw(
  //       400,
  //       "It seems like the order wasn't verified, please contact support"
  //     );
  //   }
  // }
}));
