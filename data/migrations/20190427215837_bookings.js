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
            .timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable();
        bookings
            .string('booking_start_date', 20)
            .notNullable()
        bookings
            .string('booking_end_date', 20)
            .notNullable()
        bookings
            .integer('total', 55)
            .notNullable();
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bookings')
};
