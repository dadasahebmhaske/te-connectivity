import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';
import {AppComponent} from 'src/app/app.component';
declare var $: any;
@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  custData:any;
  gridOptions:IGridoption;
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit() {
 
   this.configureGrid();
    this.custData=[{
      "plan": "plan 1",
      "Section":"Section 1",
      "Sub Section":"Sub Section 1",
      "Date":"12-Dec-2019"
    },
    {
      "plan":"plan 2",
      "Section":"Section 2",
      "Sub Section":"Sub Section 2",
      "Date":"11-Dec-2019"
    },
    {
      "plan":"plan 3",
      "Section":"Section 3",
      "Sub Section":"Sub Section 1",
      "Date":"2-Dec-2019"
    },
    
  ];
    
  }

  onEditFunction = ($event) =>{
    console.log($event);
   // alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
    $('#myModal').modal('show');
  }
  onActionFunction = ($event) =>{
    console.log($event);

  AppComponent.router.navigate(['/transaction/audit-trans']);
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
         name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-primary btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" "><span class="glyphicon glyphicon-pencil"></span></button> '
       , width: "48",
         headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Edit</div>', enableFiltering: false
     },
     {
      name: 'Delete', displayName: 'Delete', cellTemplate: '<button  style="margin:3px;" class="btn-danger btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" "> <span class="glyphicon glyphicon-trash"></span></button> '
    , width: "48",
      headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Delete</div>', enableFiltering: false
  },
  {
    name: 'Action', displayName: 'Action', cellTemplate: '<button  style="margin:3px;" class="btn-info btn-xs"  ng-click="grid.appScope.onActionFunction(row.entity)"  data-title="Close" "> <span class="glyphicon glyphicon-play-circle"></span></button> '
  , width: "48",
    headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Action</div>', enableFiltering: false
},
     
       { name: 'plan', displayName: 'Plan', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Section', displayName: 'Section', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Sub Section', displayName: 'Sub Section', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Date', displayName: 'Date', width:"*", cellTooltip: true,filterCellFiltered: true},
       // { name: 'IsActive', displayName: 'Active', width: "70", cellTooltip: true, filterCellFiltered: true},   
     ]
     this.gridOptions.columnDefs=columnDefs;
     
 // this. onSubmit();

  }
}
