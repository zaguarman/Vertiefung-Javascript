class Categories {
  static _array = [
    new MainCategory("Untergewicht", null, 18.5, [
      new SubCategory("stark", null, 16.0),
      new SubCategory("mässig", 16.0, 17.0),
      new SubCategory("leicht", 17.0, 18.5),
    ]),
    new MainCategory("Normalgewicht", 18.5, 25.0, []),
    new MainCategory("Übergewicht", 25.0, 30.0, []),
    new MainCategory("Fettleibigkeit", 30.0, null, [
      new SubCategory("Grad I", 30.0, 35.0),
      new SubCategory("Grad II", 35.0, 40.0),
      new SubCategory("Grad III", 40.0, null),
    ]),
  ];

  static getArray() {
    return Categories._array;
  }

  static test = `[
    {
        "name": "Untergewicht",
        "low": null,
        "high": 18.5,
        "subCategories": [
            {
                "name": "stark",
                "low": null,
                "high": 16.0
            },
            {
                "name": "mässig",
                "low": 16.0,
                "high": 17.0
            },
            {
                "name": "leicht",
                "low": 17.0,
                "high": 18.5
            }
        ]
    },
    {
        "name": "Normalgewicht",
        "low": 18.5,
        "high": 25.0,
        "subCategories": []
    },
    {
        "name": "Übergewicht",
        "low": 25.0,
        "high": 30.0,
        "subCategories": []
    },
    {
        "name": "Fettleibigkeit",
        "low": 30.0,
        "high": null,
        "subCategories": [
            {
                "name": "Grad I",
                "low": 30.0,
                "high": 35.0
            },
            {
                "name": "Grad II",
                "low": 35.0,
                "high": 40.0
            },
            {
                "name": "Grad III",
                "low": 40.0,
                "high": null
            }
        ]
    }
]`;

  // static parseJson() {
  //   const parsedData = JSON.parse(Categories.test);

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

  static parseJson() {
    const categoryData = JSON.parse(Categories.test);

    return categoryData.map((mainCategoryData) => {
      const subCategoriesData = mainCategoryData.subCategories || [];

      const subCategories = subCategoriesData.map((subCategoryData) => {
        return SubCategory.parseJson(subCategoryData);
      });

      return new MainCategory({
        ...mainCategoryData,
        subCategories: subCategories,
      });
    });
  }
}
