exports.up = function(knex) {
    
    return knex.schema
    .createTable('locations', function(locations) {
        locations.increments();
        locations
            .string('location_name', 255)
            .notNullable();
        locations
            .integer('hotel_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('hotels')
            .onDelete('CASCADE')
             .onUpdate('CASCADE')
        locations
            .string('imageUrl', 255)
            .notNullable();
        locations
            .string('street_address', 255)
            .notNullable();
        locations
            .string('city', 255)
            .notNullable();
        locations
            .string('state', 55)
            .notNullable();
        locations
            .integer('zip', 5)
            .notNullable();
        locations
            .string('phone', 20)
            .notNullable();
        locations
            .string('email', 255)
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
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};
