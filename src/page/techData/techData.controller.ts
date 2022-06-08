import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TechDataSpiderDto } from './dto/techDataDto';
import { TechDataService } from './techData.service';

@Controller('techData')
export class TechDataController {
  constructor(private readonly techDataService: TechDataService) {}

  @Get()
  public spider(dto: TechDataSpiderDto) {
    this.techDataService.spider(dto.titleData);
    dto.imgData && this.techDataService.spider(dto.imgData);
    dto.textData && this.techDataService.spider(dto.textData);
    this.techDataService.spider(dto.titleData);
  }

  @Get()
  public getList() {
    return this.techDataService.findAll();
  }

  @Get(':id')
  public getDetail(@Param('id') id: string) {
    return this.techDataService.findOne(id);
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.techDataService.remove(id);
  }
}
