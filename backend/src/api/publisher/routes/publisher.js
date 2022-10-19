'use strict';

/**
 * publisher router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::publisher.publisher');
