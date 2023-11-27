class Category {
  constructor(name, low, high, subCategories = []) {
    this.name = name;
    this.low = low;
    this.high = high;
    this.subCategories = subCategories;
  }
}
