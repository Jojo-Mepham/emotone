/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('daily_experience', (table) => {
    table.timestamp('created_at').defaultTo(knex.fn.now()).unique()
    table.foreign('emotion_id').references(emotions.id)
    table.foreign('user_id').references(users.id).unique()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.scheme.dropTable('daily_experience')
}
