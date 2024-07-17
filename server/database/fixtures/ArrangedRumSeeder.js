const AbstractSeeder = require("./AbstractSeeder");
const RumSeeder = require("./RumSeeder");

class ArrangedRumSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "arranged_rum", truncate: true, dependencies: [RumSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeArrangedRum = {
        name: this.faker.lorem.words(2),
        illustration: this.faker.image.url(),
        rum_id: this.getRef(`rum_${i}`).insertId,
        refName: `arranged_rum_${i}`,
      };

      this.insert(fakeArrangedRum);
    }
  }
}

module.exports = ArrangedRumSeeder;