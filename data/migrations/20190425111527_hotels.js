
exports.up = function(knex) {
    return knex.schema
    .createTable('hotels', function(hotels) {
        hotels.increments();
        hotels
            .text('name', 255)
            .notNullable()
            .unique()
        hotels
            .text('street_address', 255)
            .notNullable();
        hotels
            .text('city', 255)
            .notNullable();
        hotels
            .text('state', 55)
            .notNullable();
        hotels
            .integer('zip', 5)
            .notNullable();
        hotels
            .text('phone', 255)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hotels')
};
