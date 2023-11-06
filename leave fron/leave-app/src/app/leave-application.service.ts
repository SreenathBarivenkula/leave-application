import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveApplicationService {
  private apiBaseUrl = 'http://localhost:8080/api'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  submitLeaveApplication(leaveApplicationData: any): Observable<any> {
    const url = `${this.apiBaseUrl}/leave-applications`;
    return this.http.post(url, leaveApplicationData);
  }
}
