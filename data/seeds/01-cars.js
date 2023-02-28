const defaultCars = [
  {
    vin: "34544444444444444",
    make: "toyota",
    model: "hilux",
    mileage: 15000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "24567899999999999",
    make: "hyundai",
    model: "i20",
    mileage: 60000,
    title: "clean",
    transmission: "automatic",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};
