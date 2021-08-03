import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }

  async find() {
    return await this.repo.find();
  }

  async update(id: number, attrs: Partial<Users>) {
    const user = await this.findOne(id);

    if (!user) {
      throw new Error('Employee not found.');
    }

    Object.assign(user, attrs);

    return await this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new Error('Employee not found.');
    }

    return await this.repo.remove(user);
  }
}