import {MigrationInterface, QueryRunner} from "typeorm";

export class deleteDescritorFonteRalation1595794603804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."descritor_x_fonte" DROP CONSTRAINT "FK_ce2b3b32f4d587fcaad4b4e2d12"`);
        await queryRunner.query(`ALTER TABLE "public"."descritor_x_fonte" DROP CONSTRAINT "FK_952af3d97c933e3790990872232"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce2b3b32f4d587fcaad4b4e2d1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_952af3d97c933e379099087223"`);
        await queryRunner.query(`DROP TABLE "public"."descritor_x_fonte"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "public"."descritor_x_fonte" ("descritorId" integer NOT NULL, "fonteId" integer NOT NULL, CONSTRAINT "PK_9401858320fdf6b4ba27a199b49" PRIMARY KEY ("descritorId", "fonteId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_952af3d97c933e379099087223" ON "public"."descritor_x_fonte" ("descritorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ce2b3b32f4d587fcaad4b4e2d1" ON "public"."descritor_x_fonte" ("fonteId") `);
        await queryRunner.query(`ALTER TABLE "public"."descritor_x_fonte" ADD CONSTRAINT "FK_952af3d97c933e3790990872232" FOREIGN KEY ("descritorId") REFERENCES "public"."descritor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."descritor_x_fonte" ADD CONSTRAINT "FK_ce2b3b32f4d587fcaad4b4e2d12" FOREIGN KEY ("fonteId") REFERENCES "public"."fonte"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
