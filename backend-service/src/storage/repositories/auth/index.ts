// src/repository/auth/auth.repository.ts

import { PrismaClient } from '@prisma/client'
import { RegisterUserInput } from '../../../models/user'
import { User as UserResponse } from '@prisma/client'

export class AuthRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findUserByEmail(email: string): Promise<UserResponse | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    return user || null
  }

  async register(data: RegisterUserInput): Promise<UserResponse> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password, // You should hash this before calling this method!
        first_name: data.firstName,
        last_name: data.lastName,
        phone_number: data.phoneNumber,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        zip_code: data.zipCode,
        date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
      },
    })

    return user
  }
}
