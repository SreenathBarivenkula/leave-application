import { Component, OnInit } from '@angular/core';
import { LeaveApplicationService } from '../leave-application.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  leaveApplications: any[]; // Define the LeaveApplication model or interface

  constructor(private leaveApplicationService: LeaveApplicationService) {}

  ngOnInit() {
    this.getLeaveApplications();
  }

  getLeaveApplications() {
    this.leaveApplicationService.getLeaveApplications().subscribe(applications => {
      this.leaveApplications = applications;
    });
  }

  approveLeave(applicationId: number) {
    this.leaveApplicationService.approveLeave(applicationId).subscribe(response => {
      // Handle the response, e.g., update the status on the frontend
      this.getLeaveApplications(); // Refresh the list
    });
  }

  rejectLeave(applicationId: number) {
    this.leaveApplicationService.rejectLeave(applicationId).subscribe(response => {
      // Handle the response, e.g., update the status on the frontend
      this.getLeaveApplications(); // Refresh the list
    });
  }
}
