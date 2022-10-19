'use strict';

/**
 * publisher service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::publisher.publisher');
