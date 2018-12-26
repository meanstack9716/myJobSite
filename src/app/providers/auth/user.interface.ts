export interface User {
    UID: number;
    FName: string;
    LName: string;
    FullName: string;
    Email: string;
    PhoneNo: string | null;
    PhotoPath: string | null;
    UserType: string;
    CompanyName: string | null;
    Status: string;
    Active: number;
}
