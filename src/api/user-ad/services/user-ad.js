'use strict';

/**
 * user-ad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-ad.user-ad');
