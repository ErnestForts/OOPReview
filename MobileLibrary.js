"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
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
        console.log(priceTotal);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
