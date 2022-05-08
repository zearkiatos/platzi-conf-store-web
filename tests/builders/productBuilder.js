import BaseBuilder from './baseBuilder';

class ProductBuilder extends BaseBuilder {
  constructor() {
    super();
    this.id = '1';
    this.image = 'https://arepa.s3.amazonaws.com/camiseta.png';
    this.title = 'Camiseta';
    this.price = 25;
    this.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  }

  withId(id) {
    this.id = id;
    return this;
  }

  withImage(image) {
    this.image = image;
    return this;
  }

  withTitle(title) {
    this.title = title;
    return this;
  }

  withPrice(price) {
    this.price = price;
    return this;
  }

  withDescription(description) {
    this.description = description;
    return this;
  }
}

export default ProductBuilder;
