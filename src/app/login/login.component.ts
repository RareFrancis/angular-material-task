import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  addlogin(data:any){
this.http.get<any>("http://localhost:3000/posts").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.username ===this.loginForm.value.userName && a.password ===this.loginForm.value.password;
  })
  if(user){
    localStorage.setItem('currentUser',JSON.stringify(user));

    console.log(user);
    alert("Successfully Login");
    this.router.navigate(['/data']); 
  }else {
    alert("Invalid userName or password");
  }
});
  }
}

