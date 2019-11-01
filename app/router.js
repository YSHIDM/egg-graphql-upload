'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.post('/images', controller.home.uploadImages);
  router.post('/images', controller.imageStore.uploadImages);
  router.post('/getImages', controller.imageStore.getImages);

};
