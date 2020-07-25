import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationTweetInfo1595684440736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tweet_info" ("id" SERIAL NOT NULL, "twitter_id" character varying NOT NULL, "retweets" integer NOT NULL, "favoritos" integer NOT NULL, "mentions" character varying(280), "hashtags" character varying(280), "geolocalizacao" character varying(500), "noticiaId" integer, CONSTRAINT "UQ_8b4d78417a747f2db957aa8943b" UNIQUE ("twitter_id"), CONSTRAINT "REL_f42eb301045ebe934f28e2d467" UNIQUE ("noticiaId"), CONSTRAINT "PK_dddb3b41feb077e8e4093b1f4e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "tweet_info_twitter_id_key" ON "tweet_info" ("twitter_id") `);
        await queryRunner.query(`ALTER TABLE "tweet_info" ADD CONSTRAINT "FK_f42eb301045ebe934f28e2d4678" FOREIGN KEY ("noticiaId") REFERENCES "public"."noticia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tweet_info" DROP CONSTRAINT "FK_f42eb301045ebe934f28e2d4678"`);
        await queryRunner.query(`DROP INDEX "tweet_info_twitter_id_key"`);
        await queryRunner.query(`DROP TABLE "tweet_info"`);
    }

}
