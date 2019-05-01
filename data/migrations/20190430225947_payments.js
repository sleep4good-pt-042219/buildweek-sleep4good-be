exports.up = function(knex) {
    return knex.schema
        .createTable('payments', function(payments) {
            payments.increments();
            payments.integer('cc_number').notNullable().unique();
            payments.string('cc_exp', 7).notNullable();
            payments.integer('cc_code').notNullable().unique()

            payments
                .integer('location_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('locations')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            payments
                .integer('hotel_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('hotels')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            payments
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('payments')
  
};
