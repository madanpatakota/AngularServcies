import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
  providers:[]   // Keep in mind i am giving the provider in comp level
})
export class SecondCompComponent {

  constructor(public employeeService : EmployeeService){

  }

  //// Total 9 records of Employees and their details are 
  //in the format of EmployeeID , FullName , City , PostalCode and Country
  EmployeesList:any = [];
   ngOnInit(): void {    
     //var employeeService = new EmployeeService();
     this.EmployeesList =   this.employeeService.getEmployeeList();
   }


   //bell button click
   sendEmpDetails(emp : Employee){
      const message = this.employeeService.getLatestEmpNotification();
      console.log(message);
   }



}
