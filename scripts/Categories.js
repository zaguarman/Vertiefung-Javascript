class Category {
  constructor(name, low, high, subCategories = []) {
    this.name = name;
    this.low = low;
    this.high = high;
    this.subCategories = subCategories;
  }

  // Name
  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  // Low
  get low() {
    return this.low;
  }

  set low(low) {
    this.low = low;
  }

  // High
  get high() {
    return this.high;
  }

  set high(high) {
    this.high = high;
  }

  // Categories
  get subCategories() {
    return this.subCategories;
  }

  set subCategories(subCategories) {
    this.subCategories = subCategories;
  }
}
