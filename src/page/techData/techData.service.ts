import { SpiderDataDto } from './dto/techDataDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechData } from 'src/db/techData.entity';
import { Repository } from 'typeorm';
import https from 'https';
import cheerio from 'cheerio';
// import download from 'download';
@Injectable()
export class TechDataService {
  constructor(
    @InjectRepository(TechData)
    private techDataRepository: Repository<TechData>,
  ) {}

  findAll(): Promise<TechData[]> {
    return this.techDataRepository.find();
  }

  findOne(id: string): Promise<TechData> {
    return this.techDataRepository.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.techDataRepository.delete(id);
  }

  async startSpider(
    dto: SpiderDataDto,
    filterData: (v) => void,
  ): Promise<void> {
    https.get(dto.url, dto.options, (res: any) => {
      const chunks: any[] = [];
      res.on('data', (chunk: any) => {
        chunks.push(chunk);
      });
      res.on('end', () => {
        filterData(Buffer.concat(chunks).toString());
      });
    });

    // await this.techDataRepository.delete(id);
  }

  async spider(dto: SpiderDataDto, callBackFn?: () => void): Promise<any> {
    let imgs = null;
    this.startSpider(dto, (data: any) => {
      const $ = cheerio.load(data);
      const arr = $(dto.queryClassPath);
      switch (dto.queryType) {
        case 'IMG':
          imgs = arr.map((index: number, item: any) => {
            const imgPath = encodeURI($(item).attr('src'));
            if (
              imgPath.indexOf('http') !== -1 ||
              imgPath.indexOf('https') !== -1
            ) {
              console.log(encodeURI($(item).attr('src')));
              return encodeURI($(item).attr('src'));
            } else {
              console.log(
                `${dto?.options?.host}:${encodeURI($(item).attr('src'))}`,
              );
              return `${dto?.options?.host}:${encodeURI($(item).attr('src'))}`;
            }
          });
          break;
        case 'TITLE':
          break;
        case 'TEXT':
          break;
        case 'DESCRIPTION':
          break;
      }
    });
    callBackFn();
    return imgs;
  }

  async insertSQL(dto: TechData): Promise<void> {
    await this.techDataRepository.insert(dto);
  }
}
