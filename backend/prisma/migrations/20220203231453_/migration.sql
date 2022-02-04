/*
  Warnings:

  - A unique constraint covering the columns `[item]` on the table `menu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "menu_item_key" ON "menu"("item");
