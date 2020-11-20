import {MigrationInterface, QueryRunner} from "typeorm";

export class tweetParametrosBuscaNullableAttr1600795811841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tweet_parametros_busca" ALTER COLUMN "data_ultima_busca" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweet_parametros_busca" ALTER COLUMN "data_ultima_busca_total" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tweet_parametros_busca" ALTER COLUMN "data_ultima_busca_total" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweet_parametros_busca" ALTER COLUMN "data_ultima_busca" SET NOT NULL`);
    }

}
