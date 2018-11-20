import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-todo-app";

  todo = null;
  todosArray = [];

  addTodo = value => {
    this.todosArray.push(value);
    this.todo = null;
    console.log(this.todosArray);
  };

  deleteItem(todo) {
    for (let i = 0; i <= this.todosArray.length; i++) {
      if (todo == this.todosArray[i]) {
        this.todosArray.splice(i, 1);
      }
    }
  }
}
