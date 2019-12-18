import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demogrid';
  static headers:HttpHeaders;
  static BaseUrl;
  static ImagePath;
  static secureKey;
  static router:Router;
  constructor(public router:Router){
    AppComponent.headers=new HttpHeaders({
      'content-Type':'application/json',Authorization:'Basic'+btoa(environment.authKey)
    });
    AppComponent.BaseUrl=environment.BaseUrl;  
    AppComponent.router=router;
  }

}
