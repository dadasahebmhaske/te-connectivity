import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';

@Component({
  selector: 'app-sub-section-master-list',
  templateUrl: './sub-section-master-list.component.html',
  styleUrls: ['./sub-section-master-list.component.css']
})
export class SubSectionMasterListComponent implements OnInit {
  custData:any;
  gridOptions:IGridoption;


  constructor() { }

  ngOnInit() {
    this.configureGrid();
    this.custData=[{
      "subsectionId":1,
      "Name":"Sub Section 1"
    },
    {
      "subsectionId":2,
      "Name":"Sub Section 2"
    },
    {
      "subsectionId":3,
      "Name":"Sub Section 3"
    },
    {
      "subsectionId":4,
      "Name":"Sub Section 4"
    }
  ];
  }
  onEditFunction = ($event) =>{
    console.log($event);
   // alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
    // $('#myModal').modal('show');
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
       //{ name: 'subsectionId', displayName: 'Sub Section Id', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Name', displayName: 'Sub Section Name', width:"*", cellTooltip: true,filterCellFiltered: true},
         
       // { name: 'IsActive', displayName: 'Active', width: "70", cellTooltip: true, filterCellFiltered: true},   
     ]
     this.gridOptions.columnDefs=columnDefs;
     
 // this. onSubmit();

  }
}
