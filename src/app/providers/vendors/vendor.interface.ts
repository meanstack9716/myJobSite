export interface Vendor {
    Id: String;
    Name: String;
    Addr1: String;
    Addr2: String | null;
    City: String;
    StateCode: String;
    CountryCode: String;
    ZipCode: number;
    WebsiteUrl: String;
    PhoneNo: number;
    Email: String;
    CompanyDescription: String;
    LogoPath: String;
}
