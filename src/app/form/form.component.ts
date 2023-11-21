import { Component} from '@angular/core';
import {  FormBuilder,FormGroup,Validators,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls:  ['./form.component.css']
})
export class FormComponent{
studentForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private dialog: MatDialog){
    
  this.studentForm= this.formbuilder.group({

    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phonenumber:['',[Validators.required]],
    country:['',[Validators.required]],
    state:['',[Validators.required]],
    city:['',[Validators.required]]

  })
  }
  addStudent(){
    this.http.post("http://localhost:3000/posts",this.studentForm.value).subscribe(res=>{
      console.log(this.studentForm.value);
      alert("submitted successfully");
      
    })
  }
  openEmployeeFormModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px', // Adjust the width based on your design
      data: {} // You can pass data to the modal if needed
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed (e.g., after the modal is closed)
      console.log('The dialog was closed', result);
    });
  }
  
}