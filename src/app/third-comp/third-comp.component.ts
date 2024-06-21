import { Component , OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css'],
  providers:[EmployeeService]
})
export class ThirdCompComponent implements OnInit {

  constructor(public employeeService:EmployeeService){}

  //// Total 9 records of Employees and their details are 
  //in the format of EmployeeID , FullName , City , PostalCode and Country
 
   //EmployeesList = _______________

   EmployeesList:any = [];
   ngOnInit(): void {    
     //var employeeService = new EmployeeService();
     this.EmployeesList =   this.employeeService.getEmployeeList();
   }






}
