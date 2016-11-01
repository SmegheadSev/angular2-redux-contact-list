"use strict";
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    Hero.prototype.deserialize = function (input) {
        this.id = input.id;
        this.name = input.name;
        return this;
    };
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map