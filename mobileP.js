"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.setSDsize = function (newSDsize) {
        this.sdSize = newSDsize;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    Mobile.prototype.setCameraNum = function (newCameraNum) {
        this.cameraNumber = newCameraNum;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSDsize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNum = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.toString = function () {
        console.log("The caracteristics of the ${this.name} are:" +
            "\nName : " + this.name, "\nModel : " + this.model, "\nTrademark : " + this.trademark, "\nSD Size : " + this.sdSize, "\nColor : " + this.color, "\n Is 5G : " + this.is5G, "\nNumber of cameras : " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
