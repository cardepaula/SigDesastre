import { MigrationInterface, QueryRunner } from 'typeorm';

export class atribNotNullFonte1596327877647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE fonte ALTER COLUMN nome SET NOT NULL;`,
    );
    await queryRunner.query(
      `ALTER TABLE fonte ALTER COLUMN link SET NOT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE fonte ALTER COLUMN nome DROP NOT NULL;`,
    );
    await queryRunner.query(
      `ALTER TABLE fonte ALTER COLUMN link DROP NOT NULL;`,
    );
  }
}
