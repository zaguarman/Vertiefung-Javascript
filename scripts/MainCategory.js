class MainCategory extends Category {
  constructor(name, low, high, subCategories = []) {
    super(name, low, high, (subCategories = []));
  }
}
