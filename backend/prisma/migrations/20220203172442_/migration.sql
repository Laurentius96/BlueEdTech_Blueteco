/*
  Warnings:

  - You are about to drop the column `mesaId` on the `menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_mesaId_fkey";

-- AlterTable
ALTER TABLE "menu" DROP COLUMN "mesaId";
