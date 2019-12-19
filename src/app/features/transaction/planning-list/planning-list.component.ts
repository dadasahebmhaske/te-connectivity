import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.css']
})
export class PlanningListComponent implements OnInit {
  custData:any;
  gridOptions:IGridoption;

  constructor() { }

  ngOnInit() {
    this.configureGrid();
    this.custData=[{
      "PlanningId":1,
      "Layer":"Layer 1",
      "date":"12/12/2019",
      "user":"pravin",
      "section":"section 1",
      "Subsection":"Sub section 1"
      
    },
    {
      "PlanningId":1,
      "Layer":"Layer 2",
      "date":"12/12/2019",
      "user":"pravin",
      "section":"section 2",
      "Subsection":"Sub section 2"
    },
    {
      "PlanningId":1,
      "Layer":"Layer 3",
      "date":"12/12/2019",
      "user":"pravin",
      "section":"section 3",
      "Subsection":"Sub section 3"
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
     
       { name: 'Layer', displayName: 'layer Name', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'date', displayName: 'Date', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'user', displayName: 'User Name', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'section', displayName: 'section Name', width:"*", cellTooltip: true,filterCellFiltered: true},
       { name: 'Subsection', displayName: 'Sub section Name', width:"*", cellTooltip: true,filterCellFiltered: true},
       
     ]
     this.gridOptions.columnDefs=columnDefs;
     
 // this. onSubmit();

  }

}
