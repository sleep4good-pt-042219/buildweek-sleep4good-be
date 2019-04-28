exports.up = function(knex) {
    
    return knex.schema
    .createTable('bookings', function(bookings) {
        bookings.increments();
        bookings
            .integer('location_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('locations')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        bookings
            .integer('hotel_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('hotels')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        bookings
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        bookings
            // .notNullable()
            .timestamp('created_at')
            .defaultTo(knex.fn.now());
        bookings
            .integer('total', 55)
            .notNullable();
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bookings')
};
