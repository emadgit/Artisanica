// src/repository/auth/auth.repository.ts

import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client'

export class AuthRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.prisma.user.findUnique({
      where: { email },
    })

    return user;
  }

}
