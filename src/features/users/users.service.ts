import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      role: 'ADMIN'
    },
    {
      id: 2,
      username: 'normal',
      password: 'normal',
      role: 'NORMAL'
    },
    {
      id: 3,
      username: 'limited',
      password: 'limited',
      role: 'LIMITED'
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
