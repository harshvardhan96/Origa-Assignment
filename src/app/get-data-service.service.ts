import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(private http_client: HttpClient) { }

  getData(){
    return this.http_client.get(`https://jsonplaceholder.typicode.com/users`);
  }
}
