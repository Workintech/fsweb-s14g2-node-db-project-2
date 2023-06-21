// ESNEK
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const defaultCars = [
    {
        vin: "123",
        make: "Toyota",
        model: "Corolla",
        mileage: 1234
    },

    {
        vin: "1234",
        make: "Volkswagen",
        model: "Golf",
        mileage: 1234
    },

    {
        vin: "12345",
        make: "Seat",
        model: "Leon",
        mileage: 1234
    },

    {
        vin: "123456",
        make: "Audi",
        model: "A3",
        mileage: 1234
    },
]

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("cars").truncate()
    // delete --> sadece verileri siler, identity değeri kaldığı yerden devam eder
    // truncate --> identity insert değerini de sıfırlar
    await knex("cars").insert(defaultCars);
};