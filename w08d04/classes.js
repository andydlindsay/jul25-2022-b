class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle(3, 5);

// console.log(rectangle);
// rectangle.area();

class RectangularPrism extends Rectangle {
  constructor(width, length, height) {
    super(width, length);

    this.height = height;

    this.volume = this.volume.bind(this);
  }

  volume() {
    console.log(this.area() * this.height);
  }

  area() {
    console.log('this is the area in the derived/child class');
  }
}

const prism = new RectangularPrism(2, 4, 6);

prism.area();

// console.log(prism);
// prism.volume();

const volume = prism.volume;
volume();
