class BMI {
  constructor(mass, size) {
    this.mass = mass;
    this.size = size;
  }

  getValue(mass, size) {
    return mass / (size / 100) ** 2;
  }
}
