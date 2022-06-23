/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('emotions', (table) => {
    table.increments('id').unique().primary()
    table.string('emotion')
    table.string('sound')
    table.string('colour')
    table.comment('journal_entry')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.scheme.dropTable('emotions')
}
