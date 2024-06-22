import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CityService } from '../city.service';
import { Employee } from '../employee.model';
import { City } from '../city.model';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
  providers: [EmployeeService, CityService]
})
export class FirstCompComponent {


  constructor(
    public employeService: EmployeeService,
    public cityService: CityService) {

  }

  //// Total 9 records of Employees and their details are 
  //in the format of EmployeeID , FullName , City , PostalCode and Country
  EmployeesList: Employee[] = [];
  CitiesList: City[] = [];

  OriginalEmployeeList: Employee[] = [];

  ngOnInit(): void {
    //var employeeService = new EmployeeService();
    this.EmployeesList = this.employeService.getEmployeeList();

    this.CitiesList = this.cityService.getCitiesList();

    this.OriginalEmployeeList = this.EmployeesList.slice();


    //How to find the data from table based on the cityID(value of city)

  }


  filterByCity($event:any){
     console.log("City List");
     console.log($event.target.value); // you got the city value.

    //1 == ["hello world"]  //wenever compare but types should be same
 
    const city = this.CitiesList.find((city)=>city.CityID == +$event.target.value);

    console.log(city);

     //id , full name , city ,postalcode and country
    //const finalouput = this.EmployeesList.filter((emp)=>emp.City == city?.CityName);
    this.EmployeesList = this.OriginalEmployeeList.filter((emp)=>emp.City == city?.CityName);

    //console.log(finalouput);

  }




}
