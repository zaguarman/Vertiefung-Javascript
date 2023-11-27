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
}
