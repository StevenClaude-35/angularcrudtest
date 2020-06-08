import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  URL="http://localhost:3000/restos";

  getRestoList(){
    return this.http.get(`${this.URL}`);
    
  }
  addResto(data){
    return this.http.post(`${this.URL}`,data)
  }
  getcurrentdata(id){
    return this.http.get(`${this.URL}/${id}`)
  }
  deleteResto(id){
    return this.http.delete(`${this.http}/${id}`)
  }
  updateResto(id,data){
    return this.http.put(`${this.URL}/${id}`,data);
  }
}
