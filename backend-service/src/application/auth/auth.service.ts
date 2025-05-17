import { AuthRepository } from '../../storage/repositories/auth'
import { User } from '@prisma/client'

  // Define the input type for the login and register methods
export interface AuthInput {
    email: string
    password: string
  }
  
  export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

  
    async login(input: AuthInput): Promise<{ status: string; user: User | null }> {
      const { email, password } = input
      const user = await this.authRepository.findUserByEmail(input.email)
        if (!user) {
            return {
            status: 'OK',
            user: null,
            }
        }
      // Todo: Validate email and password

      return {
        status: 'OK',
        user,
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
  