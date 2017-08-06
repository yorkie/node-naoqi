"use strict";

// cameras
exports.kTopCamera          = 0;
exports.kBottomCamera       = 1;
exports.kMT9M114            = 2;

// colorspaces
exports.kYuvColorSpace      = 0;
exports.kyUvColorSpace      = 1;
exports.kyuVColorSpace      = 2;
exports.kRgbColorSpace      = 3;
exports.krGbColorSpace      = 4;
exports.krgBColorSpace      = 5;
exports.kHsyColorSpace      = 6;
exports.khSyColorSpace      = 7;
exports.khsYColorSpace      = 8;
exports.kYUV422ColorSpace   = 9;
exports.kYUVColorSpace      = 10;
exports.kRGBColorSpace      = 11;
exports.kHSYColorSpace      = 12;
exports.kBGRColorSpace      = 13;
exports.kYYCbCrColorSpace   = 14;
exports.kH2RGBColorSpace    = 15;
exports.kHSMixedColorSpace  = 16;

// resolutions
exports.kQQVGA              = 0;
exports.kQVGA               = 1;
exports.kVGA                = 2;
exports.k4VGA               = 3;
exports.kQQQVGA             = 7;
exports.kQQQQVGA            = 8;

// classes
exports.QiSession = require('./lib/session').default;
exports.QiObject = require('./lib/object').default;