import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/shared/config/config.module';
import { UserModule } from './api/user/user.module';
import { PrismaModule } from './shared/datasource/prisma/prisma.module';
import { AuthModule } from './shared/auth/auth.module';
import { GenreModule } from './api/genre/genre.module';
import { MovieModule } from './api/movie/movie.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    AuthModule,
    UserModule,
    GenreModule,
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
