"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var heightIsValid = function (height) {
    var h = +height;
    if (h) {
        return true;
    }
    return false;
};
var WidthIsValid = function (width) {
    var w = +width;
    if (w) {
        return true;
    }
    return false;
};
var validateImageExsits = function (image_name) {
    var path = './images/' + image_name + '.jpg';
    if (fs_extra_1.default.existsSync(path)) {
        return true;
    }
    return false;
};
var validateResizedImageExsits = function (image_name, width, height) {
    var resized_image_name = image_name + '_' + width + '_' + height;
    var path = './images/resized_images/' + resized_image_name + '.jpg';
    if (fs_extra_1.default.existsSync(path)) {
        return true;
    }
    return false;
};
exports.default = {
    heightIsValid: heightIsValid,
    WidthIsValid: WidthIsValid,
    validateImageExsits: validateImageExsits,
    validateResizedImageExsits: validateResizedImageExsits,
};
