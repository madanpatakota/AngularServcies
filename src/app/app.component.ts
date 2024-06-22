import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
//import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit {
  title = 'AngularServcies';

  constructor(public empService: EmployeeService) {

  }

  ngOnInit(): void {
    this.empService.notificationEventEmitter.subscribe((data) => {
      console.log("App component");
    })
  }


}
