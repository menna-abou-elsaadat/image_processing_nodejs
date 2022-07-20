"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const myFunc = (num: number): number => {
//     return num * num;
//   };
//   export default myFunc;
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/:image_name/:width/:height', logger_1.default.checkImage, logger_1.default.checkWidth, logger_1.default.checkHeight, logger_1.default.logger, function (req, res) {
    res.sendFile(req.params.image_name +
        '_' +
        req.params.width +
        '_' +
        req.params.height +
        '.jpg', { root: './images/resized_images/' });
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
