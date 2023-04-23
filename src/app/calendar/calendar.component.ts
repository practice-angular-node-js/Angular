import { Component } from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  // template: `<div class="form-group">
  //                   <label>Имя</label>
  //                   <input class="form-control" name="username" [(ngModel)]="user.name" />
  //               </div>
  //               <div class="form-group">
  //                   <label>Возраст</label>
  //                   <input class="form-control" type="number" name="age" [(ngModel)]="user.age" />
  //               </div>
  //               <div class="form-group">
  //                   <button class="btn btn-default" (click)="submit(user)">Отправить</button>
  //               </div>
  //               <div *ngIf="done">
  //                   <div>Получено от сервера:</div>
  //                   <div>Имя: {{receivedUser?.name}}</div>
  //                   <div>Возраст: {{receivedUser?.age}}</div>
  //               </div>`,
    providers: [HttpService],
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date = new Date;

  user: User=new User(this.selectedDate,""); // данные вводимого пользователя
       
  receivedUser: User | undefined; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService){}
  submit(user: User){
    console.log(this.selectedDate);
      this.httpService.postData(user)
              .subscribe({
                  next:(data: any) => {this.receivedUser=data; this.done=true;},
                  error: error => console.log(error)
              });
  }
}