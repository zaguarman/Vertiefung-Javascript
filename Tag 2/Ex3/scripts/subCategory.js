class SubCategory extends Category {
  constructor(name, low, high) {
    super(name, low, high);
  }

  static parseJson(subCategoryData) {
    return new SubCategory(
      subCategoryData.name,
      subCategoryData.low,
      subCategoryData.high
    );
  }
}
