import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable } from "rxjs";
// Returns as an observable array
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "Shatyaki",
        lastName: "Dutt",
        email: "shatyaki_dutt@hotmail.com",
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        balance: 100,
        registered: new Date("01/02/2018"),
        hide: true
      },
      {
        firstName: "Pushpinde",
        lastName: "Signh",
        email: "p_sighn@hotmail.com",
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 200,
        registered: new Date("01/02/2018"),
        hide: true
      },
      {
        firstName: "Mary",
        lastName: "Jackson",
        email: "m_jackson@hotmail.com",
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 300,
        registered: new Date(),
        hide: true
      }
    ];
  }

  getData(): Observable<any> {
    this.data = new Observable(observer => {
      setTimeout(() => {
        // observer.next used to publish anything , to method which has subscribed to anything that has subscribed to this event
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        // observer.next used to publish anything , to method which has subscribed to anything that has subscribed to this event
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        // observer.next used to publish anything , to method which has subscribed to anything that has subscribed to this event
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        // observer.next used to publish anything , to method which has subscribed to anything that has subscribed to this event
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    user.isActive = true;
    user.hide = true;
    user.registered = new Date();
    this.users.unshift(user);
  }
}
