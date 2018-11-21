import { Component } from "@angular/core";
import {
  trigger,
  animate,
  style,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("moveInLeft", [
      transition("void=> *", [
        style({ transform: "translateX(300px)" }),
        animate(
          200,
          keyframes([
            style({ transform: "translateX(300px)" }),
            style({ transform: "translateX(0)" })
          ])
        )
      ]),
      transition("*=>void", [
        style({ transform: "translateX(0px)" }),
        animate(
          100,
          keyframes([
            style({ transform: "translateX(0px)" }),
            style({ transform: "translateX(300px)" })
          ])
        )
      ])
    ])
  ]
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

  deleteItem(index) {
    this.todosArray.splice(index, 1);
  }
}
