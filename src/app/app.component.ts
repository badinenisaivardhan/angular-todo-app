import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'To-Do App In Angular';
  tasks:string[] = [];
  completed:string[] = [];

  addTask(taskName:string){
    this.tasks.push(taskName)
  }

  deletTask(taskName:string){
    let taskindex:number = this.tasks.indexOf(taskName);
    if(taskindex != 0){
      this.tasks.splice(taskindex, 1);
    }
  }

  doneTask(taskName:string){
    let taskindex:number = this.tasks.indexOf(taskName);
    if(taskindex != 0){
      this.tasks.splice(taskindex, 1);
      this.completed.push(taskName)
    }
  }

}
