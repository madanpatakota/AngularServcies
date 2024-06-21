import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
  providers:[EmployeeService]
})
export class FirstCompComponent {


  constructor(public employeService : EmployeeService){

  }

  //// Total 9 records of Employees and their details are 
  //in the format of EmployeeID , FullName , City , PostalCode and Country
  EmployeesList:any = [];
   ngOnInit(): void {    
     //var employeeService = new EmployeeService();
     this.EmployeesList =   this.employeService.getEmployeeList();
   }


}
