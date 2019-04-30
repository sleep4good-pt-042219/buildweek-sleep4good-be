
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(users) {
            users.increments();
            users
                .string('username', 255).notNullable().unique()
            users
                .string('password', 255).notNullable();
            users
                .decimal('role_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('roles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  
};
