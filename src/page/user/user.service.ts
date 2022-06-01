import { Module } from "@nestjs/common";
import { NestModule, RequestMethod, MiddlewareConsumer } from "@nestjs/common";

// 注入全局controller
@Module({
  imports: [],
})
export class UserModule {}
