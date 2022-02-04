/*
  Warnings:

  - A unique constraint covering the columns `[numeracao]` on the table `mesa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "_MenuToMesa" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MenuToMesa_AB_unique" ON "_MenuToMesa"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuToMesa_B_index" ON "_MenuToMesa"("B");

-- CreateIndex
CREATE UNIQUE INDEX "mesa_numeracao_key" ON "mesa"("numeracao");

-- AddForeignKey
ALTER TABLE "_MenuToMesa" ADD FOREIGN KEY ("A") REFERENCES "menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToMesa" ADD FOREIGN KEY ("B") REFERENCES "mesa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
