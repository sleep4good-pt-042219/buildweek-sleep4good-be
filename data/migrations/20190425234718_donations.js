
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('donations', function(donations) {
        donations.increments();
        donations
            .string('code', 255)
            .notNullable();
        donations
            .integer('discount', 55)
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('donations')
};
