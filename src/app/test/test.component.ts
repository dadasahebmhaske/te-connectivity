import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../interface/igridoption';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  employee:any;
  gridOptions:IGridoption;
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit(){
  

    setTimeout(()=>{
      this.getlocation();   
  
      this.gridOptions = <IGridoption>{}
      this.gridOptions.exporterMenuPdf = false;
      
      this.gridOptions.columnDefs = [];
      Object.keys(this.employee[0]).map((key, index) => {
        let gridColumnDefs = <IGridColumnDefs>{}
        gridColumnDefs.field = key;
        gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
        this.gridOptions.columnDefs.push(gridColumnDefs);
      });
      // this.gridOptions.columnDefs= [
      //   { name: 'locationname', displayName: 'Reference Code', width:"400", cellTooltip: true},
      //   { name: 'isactive', displayName: 'Product', width: "300", cellTooltip: true, filterCellFiltered: true},

      // ]
      let gridColumnDefs = <IGridColumnDefs>{}
      gridColumnDefs.field = 'edit';
      gridColumnDefs.enableSorting = false;
      gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='edit'><a href='JavaScript:Void(0);' ng-click='grid.appScope.editEmployee(row.entity);'>edit</a></div>"
      this.gridOptions.columnDefs.push(gridColumnDefs);
    },1000)
    
  }


      getlocation(){

        this.http.get('http://192.168.1.3/ezyweightapi/api/Admin/getlocationdetails?custid=&locationcode&IsActive').subscribe(
          (response:any)=>{
                       if(response.StatusCode!=0){
                        this.employee=response.Data;              
                      }                
                        }
        )
      }
  onEditFunction = ($event) =>{
    console.log($event);
    alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
  }

}
