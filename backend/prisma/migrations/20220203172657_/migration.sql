-- AlterTable
ALTER TABLE "menu" ADD COLUMN     "mesaId" TEXT;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
