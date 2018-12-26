export interface Product {
    Id: number;
    VendorId: number;
    Name: String;
    Description: String;
    ProductCategory: String;
    ImagePath: String;
    CanBePurchased: String;
    PurchasePrice: number;
    CanBeRented: String;
    DailyRental: String;
    DailyRentalAmt: number;
    WeeklyRental: String;
    WeeklyRentalAmt: number;
    MonthlyRental: String;
    MonthlyRentalAmt: number;
    Status: String;
}
