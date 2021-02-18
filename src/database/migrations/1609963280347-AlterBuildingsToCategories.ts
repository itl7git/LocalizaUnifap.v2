import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterBuildingsToCategories1609963280347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'buildings',
            new TableColumn ({
              name: 'category_id',
              type: 'uuid',
              isNullable: true,
            }),
          );
    
          await queryRunner.createForeignKey(
            'buildings',
            new TableForeignKey({
              columnNames: ['category_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'categories',
              name: 'TransactionCategory',
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('buildings', 'TransactionCategory');
        await queryRunner.dropColumn('buildings', 'category_id');
    }

}
