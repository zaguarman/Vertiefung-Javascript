class BMI {
  constructor(mass, size) {
    this._mass = mass;
    this._size = size;
  }
  // Mass
  get mass() {
    return this._mass;
  }

  set mass(mass) {
    this._mass = mass;
  }
  // Size
  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }
  // Methods
  getValue() {
    return this._mass / (this._size / 100) ** 2;
  }
}
