import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './page/user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'haosql',
      database: 'tech_sys',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
