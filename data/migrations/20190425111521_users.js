
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(users) {
            users.increments();
            users
                .text('username', 255).notNullable().unique()
            users
                .text('password', 25).notNullable();
            users
                .integer('role_id')
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
