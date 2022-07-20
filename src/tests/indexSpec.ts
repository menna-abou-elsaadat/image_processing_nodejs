import validateImage from '../utilities/image_modules/validate_image';

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