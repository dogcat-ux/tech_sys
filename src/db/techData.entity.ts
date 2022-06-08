import { IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TechData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsOptional()
  imgs: any;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsOptional()
  @IsString()
  text: string;

  @Column()
  @IsOptional()
  video: any;
}
