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

  static parseJson(categoryData) {
    // Check if the categoryData is defined and represents a MainCategory or SubCategory
    if (
      categoryData &&
      Object.keys(categoryData).some(
        (key) => key.toLowerCase() === "subcategories"
      )
    ) {
      return MainCategory.parseJson(categoryData);
    } else if (categoryData) {
      return SubCategory.parseJson(categoryData);
    } else {
      // Handle the case where categoryData is undefined
      console.error("Invalid categoryData:", categoryData);
      return null; // or throw an error, depending on your use case
    }
  }
}
