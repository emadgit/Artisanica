// src/application/auth/auth.service.ts

export interface AuthInput {
    email: string
    password: string
  }
  
  export class AuthService {
    constructor(
    ) {}
  
    async login(input: AuthInput): Promise<{ status: string; email: string }> {
      const { email, password } = input

      // Todo: Validate email and password

      return {
        status: 'ok',
        email,
      }
    }

    async register(input: AuthInput): Promise<{ status: string; email: string }> {
      const { email, password } = input

      return {
        status: 'ok',
        email,
      }
    }
  }
  