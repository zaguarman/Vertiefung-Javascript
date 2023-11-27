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
}
