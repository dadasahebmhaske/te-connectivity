import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { AppModule } from 'src/app/app.module';
import { ToastrService } from 'ngx-toastr';
import {AppComponent} from 'src/app/app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){   
    AppComponent.router.navigate(['/dashboard/analytics']);
    // if(!form.valid){
    //   return;
    // }
  // const email=form.value.email;
  // const password=form.value.password;
  this.authservice.logIn(form.value).subscribe(resData=>{
      console.log(resData);   
      if(resData.StatusCode==1)
      {AppComponent.router.navigate(['/dashboard/analytics']);
      this.toastr.success( 'Login','Successfully!');            
    } else{ this.toastr.error( resData.Message,'Failure !');     }    
      },errorMessage=>{
        console.log(errorMessage);
        // this.error=errorMessage;      
        // this.isLoading=false;
      }
      );
  }

}
