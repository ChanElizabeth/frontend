import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

// Service for home page
const API_URL: string = 'https://backend.goldenleaf.codes';

interface myData{
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient, private token:TokenService) { }

  news(data){
    return this.http.post<myData>(API_URL + '/api/new', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
    }
    )
  }

  getNews(){
    return this.http.get(API_URL + '/api/new');
  }
}
