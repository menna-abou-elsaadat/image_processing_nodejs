import fs from 'fs-extra';
import sharp from 'sharp';
import path from 'path';

async function resizeImage(image_name: string, width: number, height: number) {
  const DIR = './images/resized_images';
  fs.ensureDirSync(DIR);
  var absolutePath = path.resolve('./images/' + image_name + '.jpg');
  await sharp(absolutePath)
    .resize({
      width: width,
      height: height,
    })
    .toFile(
      './images/resized_images/' +
        image_name +
        '_' +
        width +
        '_' +
        height +
        '.jpg'
    );
}

export default resizeImage;
