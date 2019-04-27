
exports.up = function(knex) {
    return knex.schema
    .createTable('hotels', function(hotels) {
        hotels.increments();
        hotels
            .text('hotel_name', 255)
            .notNullable()
            .unique()
        hotels
            .text('imageUrl', 255)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hotels')
};
