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

