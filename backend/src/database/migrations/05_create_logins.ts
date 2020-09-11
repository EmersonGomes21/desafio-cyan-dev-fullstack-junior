import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('logins', table =>{
    table.increments('id').primary();
    table.string('login').notNullable();
    table.string('senha')
    .notNullable();
    
    table.string('user_login_id')
    .notNullable();

    table.foreign('user_login_id')
    .references('id')
    .inTable('users') 
    .onUpdate('CASCADE') //auto update ....
    .onDelete('CASCADE') //deleta as informações caso a usina seja excluida
    ;

  });

}

export async function down(knex: Knex){
  return knex.schema.dropTable('logins');
}