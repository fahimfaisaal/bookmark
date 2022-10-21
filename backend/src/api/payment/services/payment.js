'use strict';

/**
 * payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment.payment');
