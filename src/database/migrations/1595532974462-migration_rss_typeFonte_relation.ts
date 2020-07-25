import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationRssTypeFonteRelation1595532974462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {     
        await queryRunner.query(`ALTER TABLE "public"."rss" ADD CONSTRAINT "FK_37832196ba8da0960d3327b4d06" FOREIGN KEY ("tipoFonteId") REFERENCES "public"."tipo_fonte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."rss" DROP CONSTRAINT "FK_37832196ba8da0960d3327b4d06"`);
    }

}
