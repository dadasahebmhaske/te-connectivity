import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public classcheck:boolean=false;
  employee:any;
  gridOptions:IGridoption;

  ngOnInit(){

    setTimeout(()=>{
      this.employee =  [{
        "ID": 1,
        "Name": "Kevin",
        "City": "Santa Clara",
        "Address": "Longmen",
        "Designation": "VP Marketing"
      }, {
        "ID": 2,
        "Name": "Tina",
        "City": "São Bartolomeu",
        "Address": "Bojongloa",
        "Designation": "Computer Systems Analyst III"
      }, {
        "ID": 3,
        "Name": "Kevin",
        "City": "Cilolohan",
        "Address": "Tai’an",
        "Designation": "Paralegal"
      }, {
        "ID": 4,
        "Name": "Rebecca",
        "City": "Runović",
        "Address": "Tessaoua",
        "Designation": "Human Resources Manager"
      }, {
        "ID": 5,
        "Name": "Nancy",
        "City": "Merritt",
        "Address": "Yur’yevets",
        "Designation": "Assistant Manager"
      }, {
        "ID": 6,
        "Name": "Anne",
        "City": "Pio Duran",
        "Address": "Kuala Lumpur",
        "Designation": "Sales Representative"
      }, {
        "ID": 7,
        "Name": "Scott",
        "City": "Xiamao",
        "Address": "Banjarmasin",
        "Designation": "Computer Systems Analyst II"
      }];
  
      this.gridOptions = <IGridoption>{}
      this.gridOptions.exporterMenuPdf = false;
      this.gridOptions.columnDefs = [];
      Object.keys(this.employee[0]).map((key, index) => {
        let gridColumnDefs = <IGridColumnDefs>{}
        gridColumnDefs.field = key;
        gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
        this.gridOptions.columnDefs.push(gridColumnDefs);
      });
      let gridColumnDefs = <IGridColumnDefs>{}
      gridColumnDefs.field = 'edit';
      gridColumnDefs.enableSorting = false;
      gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='edit'><a href='JavaScript:Void(0);' ng-click='grid.appScope.editEmployee(row.entity);'>edit</a></div>"
      this.gridOptions.columnDefs.push(gridColumnDefs);
    },2000)
    
  }

  onEditFunction = ($event) =>{
    console.log($event);
    alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
  }

}
