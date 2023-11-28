class Categories {
  // static parseJson() {
  //   const parsedData = JSON.parse(Categories.jsonData);

  //   return parsedData.map((mainCategoryData) => {
  //     const subCategoriesData = mainCategoryData.subCategories || [];

  //     const subCategories = subCategoriesData.map((subCategoryData) => {
  //       return new SubCategory(
  //         subCategoryData.name,
  //         subCategoryData.low,
  //         subCategoryData.high
  //       );
  //     });

  //     return new MainCategory(
  //       mainCategoryData.name,
  //       mainCategoryData.low,
  //       mainCategoryData.high,
  //       subCategories
  //     );
  //   });
  // }

  static _categories;

  static {
    Categories._categories = Categories.loadCategories();
  }

  static loadCategories() {
    console.log("loading categories");

    let categories;
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data/categories.json", false);
    xhttp.onload = function () {
      const categoriesAsJSON = JSON.parse(this.response);
      categories = Categories.fromJSON(categoriesAsJSON);
      console.log(categories);
    };
    xhttp.send();

    return categories;
  }

  static fromJSON(categoriesAsJSON) {
    console.log("fromJSON");

    const categories = [];
    for (let mainCategoryAsJSON of categoriesAsJSON) {
      categories.push(MainCategory.parseJSON(mainCategoryAsJSON));
    }
    return categories;
  }

  static get categories() {
    return Categories._categories;
  }

  // static parseJSON() {
  //   const categoryData = JSON.parse(Categories.jsonData);

  //   return categoryData.map((mainCategoryData) => {
  //     const subCategoriesData = mainCategoryData.subCategories || [];

  //     const subCategories = subCategoriesData.map((subCategoryData) => {
  //       return SubCategory.parseJSON(subCategoryData);
  //     });

  //     return new MainCategory({
  //       ...mainCategoryData,
  //       subCategories: subCategories,
  //     });
  //   });
  // }
}
