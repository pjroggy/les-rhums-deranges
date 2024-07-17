const AbstractSeeder = require("./AbstractSeeder");

class IngredientSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "ingredient", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeIngredient = {
        name: this.faker.lorem.word(),
        unit: this.faker.lorem.word(),
        refName: `ingredient_${i}`,
      };

      this.insert(fakeIngredient);
    }
  }
}

module.exports = IngredientSeeder;
