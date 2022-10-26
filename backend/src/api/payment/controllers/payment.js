'use strict';

/**
 * payment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment.payment');
