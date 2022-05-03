"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    speak() {
        console.log("I have spoken");
    }
    add(otherVector2) {
        return new Vector2(this.x + otherVector2.x, this.y + otherVector2.y);
    }
}
exports.Vector2 = Vector2;
