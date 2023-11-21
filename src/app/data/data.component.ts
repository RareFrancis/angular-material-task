import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Email', 'Phone', 'Company','Address', 'State', 'City', 'edit', 'delete'];
  datas: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:3000/posts').subscribe((res: any) => {
      this.datas = res;
    });
  }

  deleteStudent(id: number) {
    this.http.delete('http://localhost:3000/posts/' + id).subscribe(res => {
      console.log(res);
      this.getData();
    });
  }
}
