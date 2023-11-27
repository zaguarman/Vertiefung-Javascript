class Categories {
  static array = [
    new Category({
      name: "Untergewicht",
      low: null,
      high: 18.5,
      subCategories: [
        new Category({ name: "stark", low: null, high: 16.0 }),
        new Category({ name: "mässig", low: 16.0, high: 17.0 }),
        new Category({ name: "leicht", low: 17.0, high: 18.5 }),
      ],
    }),
    new Category({ name: "Normalgewicht", low: 18.5, high: 25.0 }),
    new Category({ name: "Übergewicht", low: 25.0, high: 30.0 }),
    new Category({
      name: "Fettleibigkeit",
      low: 30.0,
      high: null,
      subCategories: [
        new Category({ name: "Grad I", low: 30.0, high: 35.0 }),
        new Category({ name: "Grad II", low: 35.0, high: 40.0 }),
        new Category({ name: "Grad III", low: 40.0, high: null }),
      ],
    }),
  ];

  static getArray() {
    return array;
  }
}
