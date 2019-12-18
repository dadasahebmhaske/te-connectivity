import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../interface/igridoption';
import * as angular from 'angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
public classcheck:boolean=false;
  employee:any;
  addEmp:any;
  gridOptions:IGridoption;
gridOption:IGridoption;
  ngOnInit(){

    setTimeout(()=>{
      this.employee =  [{
        "ID": 1,
        "Name": "Kevin",
        "City": "Santa Clara",
        "Address": "Longmen",
        "Designation": "VP Marketing",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":true

      }, {
        "ID": 2,
        "Name": "Tina",
        "City": "São Bartolomeu",
        "Address": "Bojongloa",
        "Designation": "Computer Systems Analyst III",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":false
      }, {
        "ID": 3,
        "Name": "Kevin",
        "City": "Cilolohan",
        "Address": "Tai’an",
        "Designation": "Paralegal",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":true
      }, {
        "ID": 4,
        "Name": "Rebecca",
        "City": "Runović",
        "Address": "Tessaoua",
        "Designation": "Human Resources Manager",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":false
      }, {
        "ID": 5,
        "Name": "Nancy",
        "City": "Merritt",
        "Address": "Yur’yevets",
        "Designation": "Assistant Manager",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":true
      }, {
        "ID": 6,
        "Name": "Anne",
        "City": "Pio Duran",
        "Address": "Kuala Lumpur",
        "Designation": "Sales Representative",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":false
      }, {
        "ID": 7,
        "Name": "Scott",
        "City": "Xiamao",
        "Address": "Banjarmasin",
        "Designation": "Computer Systems Analyst II",
        "img":"http://pushpamgroup.co.in/styles/img/logo-pushpam2.png",
        "permission":true
      }];
  
      this.gridOptions = <IGridoption>{}
      this.gridOptions.exporterMenuPdf = false;
      this.gridOptions.multiSelect = true;
      this.gridOptions.exporterExcelFilename= 'Employee list.xlsx';
      this.gridOptions.exporterColumnScaleFactor= 4.5,
      this.gridOptions.exporterExcelHeader= function (grid, workbook, sheet, docDefinition) {
        // this can be defined outside this method
        var stylesheet = workbook.getStyleSheet();
        var aFormatDefn = {
          "font": { "size": 11, "fontName": "Calibri", "bold": true },
          "alignment": { "wrapText": true }
        };
        var formatterId = stylesheet.createFormat(aFormatDefn);
 
        // excel cells start with A1 which is upper left corner
        sheet.mergeCells('B1', 'C1','D1','E1');
        var cols = [];
        // push empty data
        cols.push({ value: '' });
        // push data in B1 cell with metadata formatter
        cols.push({ value: 'Employee List as end of '+new Date(), metadata: {style: formatterId.id} });
        sheet.data.push(cols);
    };// excel header End
      // this.gridOptions.columnDefs = [];
      // Object.keys(this.employee[0]).map((key, index) => {
      //   let gridColumnDefs = <IGridColumnDefs>{}
      //   gridColumnDefs.field = key;
      //   gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
      //   this.gridOptions.columnDefs.push(gridColumnDefs);
      // });


      let  columnDefs=[];
      columnDefs=[
          {
            name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-primary btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  data-title="Close" ">&nbsp;Edit&nbsp;</button> '
          , width: "48", exporterSuppressExport: true,
            headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Edit</div>', enableFiltering: false
        },   
        {
          name: 'Permission', displayName: 'Permission', cellTemplate: `<input type="checkbox" ng-model="row.entity.permission" ng-change="grid.appScope.editEmployee(row.entity)"/>`
        , width: "80",      headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Permission</div>', enableFiltering: false
      },   
          { name: 'ID', displayName: 'ID', width:"90", cellTooltip: true,filterCellFiltered: true},
          { name: 'Name', displayName: 'Name', width:"250", cellTooltip: true,filterCellFiltered: true},
          { name: 'Designation', displayName: 'Designation', width:"250", cellTooltip: true,filterCellFiltered: true},
          { name: 'Address', displayName: 'Address', width:"250", cellTooltip: true,filterCellFiltered: true},
          { name: 'City', displayName: 'City', width:"150", cellTooltip: true,filterCellFiltered: true},
          { name: 'img', cellTemplate:`<img  onMouseOver="this.style.background='red'" onMouseOut="this.style.background='inherit'"  src="{{row.entity.img}}" >`}
     //me: 'Valid To', width:"*", cellTooltip: true,filterCellFiltered: true},
          // { name: 'IsActive', displayName: 'Active', width: "70", cellTooltip: true, filterCellFiltered: true},
        ]
        this.gridOptions.columnDefs=columnDefs;

        this.gridOptions.onRegisterApi=function(gridApi){
          gridApi.selection.on.rowSelectionChanged(angular.scope,function(row){
            var msg = 'row selected ' + row.isSelected;
            //console.log('slected from component'+ gridApi.selection.getSelectedRows());
            console.log('slected from component'+row.entity);
         
          });
          }

      // let gridColumnDefs = <IGridColumnDefs>{}
      // gridColumnDefs.field = 'edit';
      // gridColumnDefs.enableSorting = false;
      // gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='edit'><a href='JavaScript:Void(0);' ng-click='grid.appScope.editEmployee(row.entity);'>edit</a></div>"
      // this.gridOptions.columnDefs.push(gridColumnDefs);
    },500)

  this.configurationGrid();
    
  }

  configurationGrid(){
    this.gridOption = <IGridoption>{}
    this.gridOption.exporterMenuPdf = false;
    this.gridOption.multiSelect = false;
    this.gridOption.enableRowSelection=false;
    this.gridOption.enableSelectAll=false;
    // this.gridOptions.columnDefs = [];
    // Object.keys(this.employee[0]).map((key, index) => {
    //   let gridColumnDefs = <IGridColumnDefs>{}
    //   gridColumnDefs.field = key;
    //   gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
    //   this.gridOptions.columnDefs.push(gridColumnDefs);
    // });


    let  columnDefs=[];
    columnDefs=[
        {
          name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-danger btn-xs"  ng-click="grid.appScope.deleteEmployee(row.entity)"  data-title="Close" ">&nbsp;Remove&nbsp;</button> '
        , width: "70", exporterSuppressExport: true,
          headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Remove</div>', enableFiltering: false
      },    
      { name: 'ID', displayName: 'ID', width:"90", cellTooltip: true,filterCellFiltered: true},
      { name: 'Name', displayName: 'Name', width:"250", cellTooltip: true,filterCellFiltered: true},
      { name: 'Designation', displayName: 'Designation', width:"250", cellTooltip: true,filterCellFiltered: true},
      { name: 'Address', displayName: 'Address', width:"250", cellTooltip: true,filterCellFiltered: true},
      { name: 'City', displayName: 'City', width:"150", cellTooltip: true,filterCellFiltered: true},
      { name: 'img', cellTemplate:`<img  onMouseOver="this.style.background='red'" onMouseOut="this.style.background='inherit'"  src="{{row.entity.img}}" >`}
   //me: 'Valid To', width:"*", cellTooltip: true,filterCellFiltered: true},
        // { name: 'IsActive', displayName: 'Active', width: "70", cellTooltip: true, filterCellFiltered: true},
      ]
      this.gridOption.columnDefs=columnDefs;

      // this.gridOptions.onRegisterApi=function(gridApi){
      //   gridApi.selection.on.rowSelectionChanged(angular.scope,function(row){
      //     var msg = 'row selected ' + row.isSelected;
      //     //console.log('slected from component'+ gridApi.selection.getSelectedRows());
      //     console.log('slected from component'+row.entity);
       
      //   });
      //   }
  }

  onEditFunction = ($event) =>{
    console.log($event);
    alert('City: '+$event.row.City+', Designation: '+$event.row.Designation+', ID: '+$event.row.ID+', Name: '+$event.row.Name)
  }
  onDeleteFunction($event){
    console.log($event);
    const Ind=this.addEmp.indexOf($event.row);
    this.addEmp.splice(Ind, 1);
  }
getRow(){
  console.log(JSON.parse(sessionStorage.row));
  this.addEmp=JSON.parse(sessionStorage.row);
  }
}
