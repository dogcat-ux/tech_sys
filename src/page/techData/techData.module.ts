import { Module } from '@nestjs/common';
import { TechDataController } from './techData.controller';
import { TechDataService } from './techData.service';

@Module({
  imports: [],
  controllers: [TechDataController],
  providers: [TechDataService],
})
export class TechDataModule {}
