// src/application/application.ts

import { AuthService } from './auth/auth.service'

export class Application {
  readonly auth: AuthService

  constructor() {
    this.auth = new AuthService()
  }
}
