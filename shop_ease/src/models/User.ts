export class User {
    id: number;
    last_name: string;
    first_name: string;
    email: string;
    username: string;
    password: string;
    confirm_password: string;
    billing_address = new Address();
    shipping_address = new Address();
}

class Address {
    address_1: string;
    address_2: string;
    country: string;
    province: string;
    city: string;
    phone: string;
}

