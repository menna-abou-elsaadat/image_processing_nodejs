import validateImage from '../utilities/image_modules/validate_image';
import resizeImage from '../utilities/image_modules/index';
import superTest from 'supertest';
import express from 'express';

const app = express();

it('should validate heigth be truthy', () => {
  expect(validateImage.heightIsValid(5)).toBeTruthy();
});

it('should validate width be false', () => {
  expect(validateImage.heightIsValid(0)).toBeFalsy();
});

it('should validate falsy be false', () => {
  expect(validateImage.validateImageExsits('ss')).toBeFalsy();
});

it('should validate falsy be truthy', () => {
  expect(validateImage.validateImageExsits('fjord')).toBeTruthy();
});

it('resize image', () => {
  expect(async () => {
    await resizeImage('fjord', 500, 500);
  }).not.toThrow();
});

it('test endpoint',function(){
  superTest(app)
  .get('/fjord/500/500')
  .expect('Content-Type', /text/)
  .end(function(err, res) {
    if (err) throw err;
  });
})


