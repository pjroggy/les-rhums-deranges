const AbstractSeeder = require("./AbstractSeeder");

class RumSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "rum", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeRum = {
        name: this.faker.lorem.words(2),
        origin: this.faker.location.country(),
        refName: `rum_${i}`,
      };

      this.insert(fakeRum);
    }
  }
}

module.exports = RumSeeder;
