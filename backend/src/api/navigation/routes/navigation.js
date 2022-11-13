'use strict';

/**
 * navigation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::navigation.navigation');
