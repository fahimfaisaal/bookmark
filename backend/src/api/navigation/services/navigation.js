'use strict';

/**
 * navigation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::navigation.navigation');
