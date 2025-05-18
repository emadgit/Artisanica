// place files you want to import through the `$lib` alias in this folder.
export interface LoginResponse { 
    status: "OK" | "INVALID_LOGIN",
    user: User | null
}

export interface User {
    id: number
    email: string
    firstName?: string
    lastName?: string
    phoneNumber?: string
    address?: string
    city?: string
    state?: string
    country?: string
    zipCode?: string
    dateOfBirth?: string
    isActive: boolean
    isVerified: boolean
    isAdmin: boolean
    createdAt: string
    updatedAt: string 
  }

