exports.up = function(knex) {
    
    return knex.schema
    .createTable('locations', function(locations) {
        locations.increments();
        locations
            .text('location_name', 255)
            .notNullable();
        locations
            .integer('hotel_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('hotels')
        locations
            .text('imageUrl', 255)
            .notNullable();
        locations
            .text('street_address', 255)
            .notNullable();
        locations
            .text('city', 255)
            .notNullable();
        locations
            .text('state', 55)
            .notNullable();
        locations
            .integer('zip', 5)
            .notNullable();
        locations
            .text('phone', 20)
            .notNullable();
        locations
            .text('email', 255)
            .notNullable();
        locations
            .integer('rating')
            .notNullable();
        locations
            .integer('donation_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('donations')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};
