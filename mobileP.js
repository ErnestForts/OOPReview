"use strict";
exports.__esModule = true;
exports.MobileP = void 0;
var MobileP = /** @class */ (function () {
    function MobileP(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    MobileP.prototype.setName = function (newName) {
        this.name = newName;
    };
    MobileP.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    MobileP.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    MobileP.prototype.setSDsize = function (newSDsize) {
        this.sdSize = newSDsize;
    };
    MobileP.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    MobileP.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    MobileP.prototype.setCameraNum = function (newCameraNum) {
        this.cameraNumber = newCameraNum;
    };
    MobileP.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    MobileP.prototype.getName = function () {
        return this.name;
    };
    MobileP.prototype.getModel = function () {
        return this.model;
    };
    MobileP.prototype.getTrademark = function () {
        return this.trademark;
    };
    MobileP.prototype.getSDsize = function () {
        return this.sdSize;
    };
    MobileP.prototype.getColor = function () {
        return this.color;
    };
    MobileP.prototype.getIs5G = function () {
        return this.is5G;
    };
    MobileP.prototype.getCameraNum = function () {
        return this.cameraNumber;
    };
    MobileP.prototype.getPrice = function () {
        return this.price;
    };
    MobileP.prototype.toString = function () {
        console.log("The caracteristics of the ${this.name} are:" +
            "\nName : " + this.name, "\nModel : " + this.model, "\nTrademark : " + this.trademark, "\nSD Size : " + this.sdSize, "\nColor : " + this.color, "\n Is 5G : " + this.is5G, "\nNumber of cameras : " + this.cameraNumber);
    };
    return MobileP;
}());
exports.MobileP = MobileP;
