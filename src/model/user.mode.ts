export interface UserModel {
    id?: number;
    name: string;
    role: number;
    phone: string;
    email: string;
    email_verified_at: string;
    password: string;
    deleted_at: Date;
    remember_token: string;
    created_at: Date;
    updated_at: Date;
}
