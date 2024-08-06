import { MigrationInterface, QueryRunner } from "typeorm";

export class Test41722309155486 implements MigrationInterface {
    name = 'Test41722309155486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50), "measureType" "public"."items_measuretype_enum" NOT NULL, "quantity" double precision NOT NULL, "price" double precision NOT NULL, "stock" double precision NOT NULL, "recipe_id" uuid, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" money NOT NULL, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "owners" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50), "email" character varying(50), "phone" integer, "DOB" character varying, CONSTRAINT "UQ_df4ef717018c5dc7bd3f4ab0de5" UNIQUE ("email"), CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50), "stock" integer NOT NULL, "price" double precision NOT NULL, "account_id" uuid, "receipe_id" uuid, CONSTRAINT "REL_58060391a61eb85676e7e5b8f0" UNIQUE ("receipe_id"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying(20), "password" character varying(15), "onwner_id" uuid, CONSTRAINT "UQ_9c3e2877d56c4d8400d1836d91d" UNIQUE ("userName"), CONSTRAINT "REL_8e67e48d853fd3e974b422cd62" UNIQUE ("onwner_id"), CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_5be2c168eaf3a8759cf4927e452" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_74bbb757c7e82ed23180bd1dd7e" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_58060391a61eb85676e7e5b8f02" FOREIGN KEY ("receipe_id") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_8e67e48d853fd3e974b422cd629" FOREIGN KEY ("onwner_id") REFERENCES "owners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_8e67e48d853fd3e974b422cd629"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_58060391a61eb85676e7e5b8f02"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_74bbb757c7e82ed23180bd1dd7e"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_5be2c168eaf3a8759cf4927e452"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "owners"`);
        await queryRunner.query(`DROP TABLE "recipes"`);
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
