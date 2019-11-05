'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/images', controller.imageStore.uploadImages);
  router.post('/getImages', controller.imageStore.getImages);
  router.post('/imagesStream', controller.imageStore.uploadStreamImage);
  router.post('/upload', controller.imageStore.uploadStreamImages);

};
