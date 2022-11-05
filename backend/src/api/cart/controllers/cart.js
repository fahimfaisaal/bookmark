'use strict';

/**
 * cart controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cart.cart');

// ({strapi})=> ({
//     async find(ctx) {
//         // some logic here
//         const { data, meta } = await super.find(ctx);
//         // some more logic
//         return strapi.query('cart').find(ctx.query, [
//             {
//               path: 'book',
//               populate: {
//                 path: 'images',
//               },
//             },
//           ]);
//         // return { data, meta };
//       }

// })
