"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterBuildingsToCategories1609963280347 = void 0;

var _typeorm = require("typeorm");

class AlterBuildingsToCategories1609963280347 {
  async up(queryRunner) {
    await queryRunner.addColumn('buildings', new _typeorm.TableColumn({
      name: 'category_id',
      type: 'uuid',
      isNullable: true
    }));
    await queryRunner.createForeignKey('buildings', new _typeorm.TableForeignKey({
      columnNames: ['category_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categories',
      name: 'TransactionCategory',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('buildings', 'TransactionCategory');
    await queryRunner.dropColumn('buildings', 'category_id');
  }

}

exports.AlterBuildingsToCategories1609963280347 = AlterBuildingsToCategories1609963280347;