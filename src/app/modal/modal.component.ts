import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  registerForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Phone: ['', [Validators.required, Validators.maxLength(10)]],
      Company: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      State: ['', [Validators.required]],
      City: ['', [Validators.required]]
    });
  }

  addStudent() {
    this.http.post("http://localhost:3000/posts", this.registerForm.value).subscribe(res => {
      console.log(this.registerForm.value);
      alert("Submitted successfully");

      // Reset the form
      this.registerForm.reset();

      // Close the modal
      this.dialogRef.close();
    });
  }
}
