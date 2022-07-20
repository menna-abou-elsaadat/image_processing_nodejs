import express from 'express';
import resizeImage from './image_modules/index';
import validateImage from './image_modules/validate_image';

const checkImage = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
):void {
  if (validateImage.validateImageExsits(req.params.image_name)) {
    next();
  } else {
    res.send('This image name was not found');
  }
};

const checkWidth = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
):void {
  const width: number = +req.params.width;
  if (validateImage.WidthIsValid(width)) {
    next();
  } else {
    res.send('Please provide a valid width ');
  }
};

const checkHeight = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
):void {
  const height: number = +req.params.height;
  if (validateImage.heightIsValid(height)) {
    next();
  } else {
    res.send('Please provide a valid height ');
  }
};
const logger = async function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const width: number = +req.params.width;
  const height: number = +req.params.height;
  if (
    validateImage.validateResizedImageExsits(
      req.params.image_name,
      width,
      height
    )
  ) {
    next();
  } else {
    await resizeImage(req.params.image_name, width, height);
    next();
  }
};

export default {
  logger,
  checkHeight,
  checkWidth,
  checkImage,
};
