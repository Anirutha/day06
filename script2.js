//3. Write a “person” class to hold all the details.
//Ans:
//Input:
class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("ani", "sivakumar",25, "bca", "anisiva@gmail.com", 9123487610, "gudalur");
let person2 = new Person("praveen","sivakumar", 23, "engineering", "pravsiva@gmail.com", 8143276980, "ooty");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
//Output:
//Person1:
/*Name: ani sivakumar
age: 25
department: bca
email: anisiva@gmail.com
mobile: 9123487610
city: gudalur*/
//Person2:
/*Name: praveen sivakumar
age: 23
department: engineering
email: pravsiva@gmail.com
mobile: 8143276980
city: ooty*/