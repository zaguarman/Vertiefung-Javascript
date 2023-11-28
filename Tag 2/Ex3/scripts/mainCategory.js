class MainCategory extends Category {
  constructor(name, low, high, subCategories) {
    super(name, low, high);
    this._subCategories = subCategories;
  }

  // SubCategories
  get subCategories() {
    return this._subCategories;
  }

  set subCategories(subCategories) {
    this._subCategories = subCategories;
  }

  static parseJson(mainCategoryData) {
    const subCategoriesData =
      mainCategoryData[
        Object.keys(mainCategoryData).find(
          (key) => key.toLowerCase() === "subcategories"
        )
      ] || [];

    const subCategories = subCategoriesData.map((subCategoryData) => {
      return SubCategory.parseJson(subCategoryData);
    });

    return new MainCategory({
      ...mainCategoryData,
      subCategories: subCategories,
    });
  }
}
