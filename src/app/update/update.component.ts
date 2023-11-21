import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  dataid: any;
  updateForm: FormGroup;
  employee: any;

  constructor(
    private service: ApiService,
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formbuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', Validators.required],
      Company: ['', Validators.required],
      Address: ['', Validators.required],
      State: ['', Validators.required], // Add a form control for state
      City: ['', Validators.required],  // Add a form control for city
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']('id');
      console.log('data id is', this.dataid);
    });

    this.service.fetchData(this.dataid).subscribe((data: any) => {
      this.employee = data;
      console.log(this.employee);
      this.updateForm.patchValue({
        Name: this.employee.Name,
        Email: this.employee.Email,
        Phone: this.employee.Phone,
        Company: this.employee.Company,
        Address: this.employee.Address,
        State: this.employee.State, // Update state value
        City: this.employee.City    // Update city value
      });
    });
  }

  update(): void {
    const employeedata = this.updateForm.value;
    this.service.updateemployee(this.dataid, employeedata).subscribe(
      (res: any) => {
        this.router.navigate(['/data']);
        console.log(res);
        alert('Updated successfully');
      },
      (error) => {
        console.error('Error updating employee:', error);
        // Handle error appropriately
        alert('Error updating employee');
      }
    );
  }
}
