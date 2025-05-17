// src/application/application.ts

import { AuthService } from './auth/auth.service'
import { AuthRepository } from '../storage/repositories/auth'
import prisma from '../integrations/prisma'

export class Application {
  readonly auth: AuthService

  constructor() {
    const authRepository = new AuthRepository(prisma)
    this.auth = new AuthService(authRepository)
  }
  
}
