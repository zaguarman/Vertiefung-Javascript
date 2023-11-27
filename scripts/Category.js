class Category {
  constructor(name, low, high) {
    this._name = name;
    this._low = low;
    this._high = high;
  }

  // Name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Low
  get low() {
    return this._low;
  }

  set low(low) {
    this._low = low;
  }

  // High
  get high() {
    return this._high;
  }

  set high(high) {
    this._high = high;
  }
}
