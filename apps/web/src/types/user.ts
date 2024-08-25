export interface UserRegister {
    email: string
    username: string
    password: string
    first_name: string
    last_name: string
    dob: string
    phone: string
}

export interface UserLogin {
    data: string
    password: string
}

export interface EORegister {
    email: string
    creator: string
    password: string
    first_name: string
    last_name: string
    phone: string
}