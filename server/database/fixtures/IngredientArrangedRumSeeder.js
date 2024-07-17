const AbstractSeeder = require("./AbstractSeeder");
const ArrangedRumSeeder = require("./ArrangedRumSeeder");
const IngredientSeeder = require("./IngredientSeeder");

class IngredientArrangedRumSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "ingredient_arranged_rum", truncate: true, dependencies: [ArrangedRumSeeder, IngredientSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeIngredientArrangedRum = {
        arranged_rum_id: this.getRef(`arranged_rum_${i}`).insertId,
        ingredient_id: this.getRef(`ingredient_${i}`).insertId,
        quantity: this.faker.number.int({ min: 1, max: 100 }), // Ajustez la plage selon vos besoins
      };

      this.insert(fakeIngredientArrangedRum);
    }
  }
}

module.exports = IngredientArrangedRumSeeder;
