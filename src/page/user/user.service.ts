import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/user.entity';
import { Repository } from 'typeorm/repository/Repository';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async login(username: string, password: string): Promise<void> {
    await this.findByUsername(username);
  }
}
