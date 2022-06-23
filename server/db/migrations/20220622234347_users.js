/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().unique().defaultTo(knex.raw('gen_random_uuid()'))
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('email').notNullable().unique()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.scheme.dropTable('users')
}
