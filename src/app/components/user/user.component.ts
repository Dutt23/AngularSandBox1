import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

// Decorator.
// USeful to add extra imformation to our class and our component
@Component({
  selector: "app-user",
  // template:'<h2>Shatyaki Dutt</h2>'
  templateUrl: "./user.component.html",
  styleUrls: []
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "Shatyaki",
      lastName: "Dutt",
      age: 24,
      address: {
        street: "VivekNanada Nagar",
        city: "Bangalore",
        state: "KA"
      }
    };
  }

  // properties
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   address;

  //   numberArray: number[];
  //   stringArray: string[];
  //   mixedArray: any[];
  //   booleanArray: boolean[];
  //   Basically a mapped array
  //   myTuple: [string, number, boolean];

  // this.myTuple = [this.firstName, this.age, true];

  //   sayHello(): string {
  //     console.log(`Hello ${this.firstName}`);
  //     return `Hello ${this.firstName}`;
  //   }
}
