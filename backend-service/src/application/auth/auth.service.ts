import { AuthRepository } from '../../storage/repositories/auth'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'

  // Define the input type for the login and register methods
export interface AuthInput {
    email: string
    password: string
  }
  
  export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

  
    async login(input: AuthInput): Promise<{ status: string; user: User | null }> {
      const { email, password } = input
      const user = await this.authRepository.findUserByEmail(email)
        if (!user) {
            return {
            status: 'OK',
            user: null,
            }
        }
      // Todo: Validate email and password
        const isPasswordValid = await bcrypt.compare(password, user.password);

      return {
        status: isPasswordValid ? 'OK' : "INVALID_LOGIN",
        user: isPasswordValid ? user : null,
      }
    }

    async register(input: AuthInput): Promise<{ status: string; user: User }> {
    try {
        const { password } = input
        const hashed = await bcrypt.hash(password, 10)
        const registeredUser = await this.authRepository.register({ ...input, password: hashed })
  
        return {
          status: 'OK',
          user: registeredUser,
        }
    } catch (error) {
        console.error('Error during registration:', error)
        throw new Error('Registration failed')
      }
    }
  }
  