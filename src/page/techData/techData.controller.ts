import { Controller, Post } from '@nestjs/common';
import { TechDataService } from './techData.service';

@Controller()
export class TechDataController {
  constructor(private readonly techDataService: TechDataService) {}

  @Post()
  login(): string {
    return '212';
  }
}
