import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';
declare var $: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  custData:any;
  gridOptions:IGridoption;
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit() {
 
   this.configureGrid();
    this.custData=[{
      "Name": "Shamal Kedari",
      "Email":"Shamalk@teconnectivity.com",
      "Mobile":"9784548745",
      "Layer":"Layer 1",
      "Plant":"Plant 1",
      "Designation":"Supervisor",
    },
    {
      "Name": "Digpal Lanjekar",
      "Email":"Shamalk@teconnectivity.com",
      "Mobile":"8454874554",
      "Layer":"Layer 2",
      "Plant":"Plant 1",
      "Designation":"Auditor",
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
         name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-primary btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" "><span class="glyphicon glyphicon-pencil"></span></button> '
       , width: "48",
         headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Edit</div>', enableFiltering: false
     },
     {
      name: 'Delete', displayName: 'Delete', cellTemplate: '<button  style="margin:3px;" class="btn-danger btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" "> <span class="glyphicon glyphicon-trash"></span></button> '
    , width: "48",
      headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Delete</div>', enableFiltering: false
  },
       { name: 'Name', displayName: 'Name', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Email', displayName: 'Email', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Mobile', displayName: 'Mobile No.', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Layer', displayName: 'Layer', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Plant', displayName: 'Plant', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Designation', displayName: 'Designation', width:"*", cellTooltip: true,filterCellFiltered: true},
       // { name: 'IsActive', displayName: 'Active', width: "70", cellTooltip: true, filterCellFiltered: true},   
     ]
     this.gridOptions.columnDefs=columnDefs;
     
 // this. onSubmit();

  }
}
