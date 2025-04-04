class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}
let cookieone = new Cookie("red"); //this is a red cookie
let cookietwo = new Cookie("blue"); //this is a blue cookie
