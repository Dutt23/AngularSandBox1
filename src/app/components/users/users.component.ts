import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  constructor(private dataService: DataService) {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  showExtended: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  data: number;
  @ViewChild("userForm") form: any;

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  seeUserDetails(user: User) {
    user.hide = !user.hide;
  }
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form not valid");
    } else {
      this.dataService.addUser(value);
      this.form.reset();
    }
  }

  addUser() {}

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.enableAdd
    };
  }
  setCurrentStyles() {
    this.currentStyles = {};
  }
  activateAdd(e) {
    this.enableAdd = true;
    this.setCurrentClasses();
  }
  preventPaste(e) {
    e.preventDefault();
  }
  fireEvent(e) {
    console.log(e.target.value);
  }
}
