"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreteTableBuildings1609958873262 = void 0;

var _typeorm = require("typeorm");

class CreteTableBuildings1609958873262 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'buildings',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'latitude',
        type: 'varchar'
      }, {
        name: 'longitude',
        type: 'varchar'
      }, {
        name: 'description',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('buildings');
  }

}

exports.CreteTableBuildings1609958873262 = CreteTableBuildings1609958873262;