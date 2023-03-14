import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auth/guard';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard
    }
  ]
})
export class AppModule {}
