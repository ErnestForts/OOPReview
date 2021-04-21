"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var mobileP_1 = require("./mobileP");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.setName = function (newName) {
        this.name = newName;
    };
    MobileLibrary.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    MobileLibrary.prototype.setMobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var priceTotal = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            priceTotal = priceTotal + this.mobiles[i].getPrice();
        }
        return priceTotal;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles:");
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("The caracteristics of the mobile ${this.mobiles[i].getName()} are:" +
                "\nName : " + this.mobiles[i].getName(), "\nModel : " + this.mobiles[i].getModel(), "\nTrademark : " + this.mobiles[i].getTrademark(), "\nSD Size : " + this.mobiles[i].getSDsize(), "\nColor : " + this.mobiles[i].getColor(), "\nIs 5G : " + this.mobiles[i].getIs5G(), "\nNumber of cameras : " + this.mobiles[i].getCameraNum());
        }
        console.log("Price overall: " + this.totalPrice);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var mobile1 = new mobileP_1.MobileP("Nokia3210", "3210", "Nokia", 1, "Azul", false, 0, 55);
var mobile2 = new mobileP_1.MobileP("iPhone3G", "3G", "Apple", 8, "Negro", false, 1, 195);
var mobile3 = new mobileP_1.MobileP("Samsung Galaxy 10", "Galaxy 10", "Samsung", 16, "Verde", false, 1, 155);
var mobile4 = new mobileP_1.MobileP("Pocophone", "X3", "Xiaomi", 128, "Amarillo", true, 4, 459);
var mobileArr = [mobile1, mobile2, mobile3, mobile4];
var libraryMobile = new MobileLibrary("MiMobil", "Barcelona", mobileArr);
libraryMobile.printLibrary();
