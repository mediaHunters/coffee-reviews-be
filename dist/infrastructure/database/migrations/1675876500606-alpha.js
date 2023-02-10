"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/infrastructure/database/migrations/1675876500606-alpha.ts
var alpha_exports = {};
__export(alpha_exports, {
  alpha1675876500606: () => alpha1675876500606
});
module.exports = __toCommonJS(alpha_exports);
var alpha1675876500606 = class {
  constructor() {
    this.name = "alpha1675876500606";
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TYPE "public"."coffee_type_enum" AS ENUM('BEANS', 'POWDER')`);
    await queryRunner.query(`CREATE TYPE "public"."coffee_burntlvl_enum" AS ENUM('LIGHT_ROAST', 'MEDIUM_ROAST', 'DARK_ROAST')`);
    await queryRunner.query(`CREATE TYPE "public"."coffee_coffeestatus_enum" AS ENUM('WAITING_QUEUE', 'VERIFIED', 'BLOCKED')`);
    await queryRunner.query(`CREATE TABLE "coffee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "brand" text NOT NULL, "name" text NOT NULL, "type" "public"."coffee_type_enum" NOT NULL, "imgUrl" text NOT NULL, "description" text NOT NULL, "burntLvl" "public"."coffee_burntlvl_enum" NOT NULL, "reflink" text NOT NULL, "CoffeeStatus" "public"."coffee_coffeestatus_enum" NOT NULL DEFAULT 'WAITING_QUEUE', CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "review" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "rating" numeric NOT NULL, "look" numeric NOT NULL, "smell" numeric NOT NULL, "taste" numeric NOT NULL, "coffeeId" text NOT NULL, "userId" text, "coffee" uuid, "user" uuid, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TYPE "public"."role_name_enum" AS ENUM('ADMIN', 'MEMBER')`);
    await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" "public"."role_name_enum" NOT NULL DEFAULT 'MEMBER', CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" text, "lastName" text, "nickname" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "roleId" uuid, CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_d3cbff3e4fa667b825374f8661e" FOREIGN KEY ("coffee") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_534b9ccc62d81280da578de6fe6" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
    await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_534b9ccc62d81280da578de6fe6"`);
    await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_d3cbff3e4fa667b825374f8661e"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TYPE "public"."role_name_enum"`);
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(`DROP TABLE "coffee"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_coffeestatus_enum"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_burntlvl_enum"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_type_enum"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alpha1675876500606
});
//# sourceMappingURL=1675876500606-alpha.js.map