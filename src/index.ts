// const myFunc = (num: number): number => {
//     return num * num;
//   };
//   export default myFunc;
import express from 'express';
import logger from './utilities/logger';

const app = express();

const port = 3000;

app.get(
  '/:image_name/:width/:height',
  logger.checkImage,
  logger.checkWidth,
  logger.checkHeight,
  logger.logger,
  (req: express.Request, res: express.Response):void => {
    res.sendFile(
      req.params.image_name +
        '_' +
        req.params.width +
        '_' +
        req.params.height +
        '.jpg',
      { root: './images/resized_images/' }
    );
  }
);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
