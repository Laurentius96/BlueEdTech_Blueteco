import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { MesaModule } from './mesa/mesa.module';

@Module({
  imports: [UserModule, MenuModule, MesaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
