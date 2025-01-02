export class Customer {
    id?: number;
    name?: string | null | undefined;
    age?: number | string | null | undefined;
    gender?: string | null | undefined;
    address?: string | null | undefined;

    constructor(id: number, name: string, age: number, gender: string, address: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

}
