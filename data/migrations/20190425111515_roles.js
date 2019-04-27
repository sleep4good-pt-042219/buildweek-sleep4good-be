
exports.up = function(knex) {
    return knex.schema
        .createTable('roles', function(roles) {
            roles.increments();
            roles
                .text('name', 25)
                .notNullable()
                .unique()
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('roles')
};
