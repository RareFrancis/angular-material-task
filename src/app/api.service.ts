import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data:any

  constructor(private http:HttpClient) { }
 
  updateemployee(id:number,data:any){
    return this.http.put(' http://localhost:3000/posts/'+id,data);
  }
  fetchData(id:number){
    return this.http.get('http://localhost:3000/posts/'+id);
      
  }

    }