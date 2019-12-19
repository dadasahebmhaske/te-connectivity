import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';
declare var $: any;
@Component({
  selector: 'app-plant-master-list',
  templateUrl: './plant-master-list.component.html',
  styleUrls: ['./plant-master-list.component.css']
})
export class PlantMasterListComponent implements OnInit {
  custData:any;
  gridOptions:IGridoption;
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit() {
 
   this.configureGrid();
    this.custData=[{
      "plantID":1,
      "Name":"Plant 1"
    },
    {
      "plantID":2,
      "Name":"Plant 2"
    },
    {
      "plantID":3,
      "Name":"Plant 3"
    },
    {
      "plantID":4,
      "Name":"Plant 4"
    }
  ];
    
  }

  onEditFunction = ($event) =>{
    console.log($event);
   // alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
    $('#myModal').modal('show');
  }

  // onSubmit(){
 
  // this.http.get(`${AppComponent.BaseUrl}Admin/GetCustomerDetails?CustId=&CustName&CompanyName=&IsActive=Y`,{headers:AppComponent.headers}).subscribe(
  //   (response:any)=>{
  //                if(response.StatusCode!=0){
  //                 this.custData=response.Data;              
  //               }                
  //                 } )

  // }  

  configureGrid(){
    this.gridOptions = <IGridoption>{}
    this.gridOptions.exporterMenuPdf = false;
    
     this.gridOptions.columnDefs = [];
    // Object.keys(this.custData[0]).map((key, index) => {
    //   let gridColumnDefs = <IGridColumnDefs>{}
    //   gridColumnDefs.field = key;
    //   gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
    //   this.gridOptions.columnDefs.push(gridColumnDefs);
    // });

    let  columnDefs=[];
    columnDefs=[
      {
        name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-primary btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" "> <span class="glyphicon glyphicon-pencil"></span></button> '
      , width: "48",
        headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Edit</div>', enableFiltering: false
    },
    {
     name: 'Delete', displayName: 'Delete', cellTemplate: '<button  style="margin:3px;" class="btn-danger btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" "> <span class="glyphicon glyphicon-trash"></span></button> '
   , width: "48",
     headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Delete</div>', enableFiltering: false
 },
      // { name: 'plantID', displayName: 'Plant Id', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Name', displayName: 'Plant Name', width:"*", cellTooltip: true,filterCellFiltered: true},
         
       // { name: 'IsActive', displayName: 'Active', width: "70", cellTooltip: true, filterCellFiltered: true},   
     ]
     this.gridOptions.columnDefs=columnDefs;
     
 // this. onSubmit();

  }
}
