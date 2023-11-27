class BMI {
  constructor(mass, size) {
    this.mass = mass;
    this.size = size;
  }

  // Mass
  get mass() {
    return this.mass;
  }

  set mass(mass) {
    this.mass = mass;
  }

  // Size
  get size() {
    return this.size;
  }

  set size(size) {
    this.size = size;
  }

  // Methods
  getValue() {
    return this.mass / (this.size / 100) ** 2;
  }
}
