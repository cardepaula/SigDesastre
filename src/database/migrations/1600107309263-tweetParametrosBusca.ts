import {MigrationInterface, QueryRunner} from "typeorm";

export class tweetParametrosBusca1600107309263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tweet_parametros_busca" ("id" SERIAL NOT NULL, "data_inicio_busca" TIMESTAMP NOT NULL, "data_ultima_busca" TIMESTAMP NOT NULL, "data_ultima_busca_total" TIMESTAMP NOT NULL, "descritorId" integer, CONSTRAINT "REL_e70701a8cf020150e42ff75a55" UNIQUE ("descritorId"), CONSTRAINT "PK_390261e08fdc11f00b3a06f50fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tweet_parametros_busca" ADD CONSTRAINT "FK_e70701a8cf020150e42ff75a55e" FOREIGN KEY ("descritorId") REFERENCES "public"."descritor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tweet_parametros_busca" DROP CONSTRAINT "FK_e70701a8cf020150e42ff75a55e"`);
        await queryRunner.query(`DROP TABLE "tweet_parametros_busca"`);
    }

}
