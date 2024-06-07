#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w === undefined ? undefined : w;
    this.height = h === undefined ? undefined : h;
  }
}
module.exports = Rectangle;
