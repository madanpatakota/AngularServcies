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

  LatestNews : any;
  isShowNotification = false;

  ngOnInit(): void {

    //data your receving the emp data...
    this.empService.notificationEventEmitter.subscribe((data) => {
      this.LatestNews = data;
      this.isShowNotification = true;
      console.log("App component" , this.LatestNews);


      setTimeout(() => {
        this.isShowNotification = false;
        this.LatestNews = "";
      }, 5000);


    })






  }


  


}
