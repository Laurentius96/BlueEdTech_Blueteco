/*
  Warnings:

  - Changed the type of `numeracao` on the `mesa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "mesa" DROP COLUMN "numeracao",
ADD COLUMN     "numeracao" DOUBLE PRECISION NOT NULL;
