"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validate_image_1 = __importDefault(require("../utilities/image_modules/validate_image"));
it('should validate heigth be truthy', function () {
    expect(validate_image_1.default.heightIsValid(5)).toBeTruthy();
});
it('should validate width be false', function () {
    expect(validate_image_1.default.heightIsValid(0)).toBeFalsy();
});
it('should validate falsy be false', function () {
    expect(validate_image_1.default.validateImageExsits('ss')).toBeFalsy();
});
it('should validate falsy be truthy', function () {
    expect(validate_image_1.default.validateImageExsits('fjord')).toBeTruthy();
});
