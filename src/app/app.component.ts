import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-todo-app";

  todo = "";
  todosArray = [];

  addTodo = value => {
    this.todosArray.push(value);
    console.log(this.todosArray);
  };
}
