import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

interface myData{
  obj: Object
}

const API_URL: string = 'http://backend.goldenleaf.codes';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient, private token:TokenService) { }

  reservations(data){
    return this.http.post<myData>(API_URL + '/api/reservation', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
    }
    )
  }

  getReservations(){
    return this.http.get(API_URL + '/api/reservation');
  }
}
