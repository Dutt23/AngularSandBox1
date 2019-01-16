import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor() {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  showExtended: boolean = true;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};

  ngOnInit() {
    this.users = [
      {
        firstName: "Shatyaki",
        lastName: "Dutt",
        age: 24,
        address: {
          street: "VivekNanada Nagar",
          city: "Bangalore",
          state: "KA"
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        balance: 100,
        registered: new Date("01/02/2018")
      },
      {
        firstName: "Pushpinde",
        lastName: "Signh",
        age: 22,
        address: {
          street: "VivekNanada Nagar",
          city: "Desert",
          state: "Rajasthan"
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 100,
        registered: new Date("01/02/2018")
      }
    ];

    // this.addUser({
    //   firstName: "John",
    //   lastName: "Cena"
    //   // image: "http://lorempixel.com/600/600/people/1"
    // });
  }

  // addUser(user: User) {
  //   this.users.push(user);
  // }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.enableAdd
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "0" : "100px"
    };
  }
}
