import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Service for login to Admin
const API_URL: string = 'https://backend.goldenleaf.codes';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private redirectUrl: string;
	private adminUrl: string = '/admin';

  private loggedInStatus: boolean = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  isLoggedIn(): boolean{
    return this.loggedInStatus;
  }

	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getAdminUrl(): string {
		return this.adminUrl;
  }
  
  login(data){
    return this.http.post(API_URL + '/api/admin', data, {
    }
  )}
}