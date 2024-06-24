import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css'],
  providers: []
})
export class ThirdCompComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  //// Total 9 records of Employees and their details are 
  //in the format of EmployeeID , FullName , City , PostalCode and Country

  //EmployeesList = _______________

  EmployeesList: any = [];

  //LatestMessage = "";

  LatestMessage : any;
  isParagraphShow = false;

  ngOnInit(): void {
    //var employeeService = new EmployeeService();
    this.EmployeesList = this.employeeService.getEmployeeList();



    this.employeeService
    .notificationEventEmitter
    .subscribe((news:string) => {
        //console.log("Third Compoenent");
        this.LatestMessage = news;
        this.isParagraphShow = true;
        //console.log("ThirdComp" , this.LatestMessage);

        setTimeout(() => {
          this.LatestMessage = "";
          this.isParagraphShow = false;
        }, 5000);

      })




  }






}
