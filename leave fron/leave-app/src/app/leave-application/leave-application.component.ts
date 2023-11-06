import { Component } from '@angular/core';
import { LeaveApplicationService } from '../leave-application.service';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {
  employeeName: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  reason: string;

  constructor(private leaveApplicationService: LeaveApplicationService) {}

  submitLeaveApplication() {
    const leaveApplicationData = {
      employeeName: this.employeeName,
      leaveType: this.leaveType,
      startDate: this.startDate,
      endDate: this.endDate,
      reason: this.reason
    };

    this.leaveApplicationService.submitLeaveApplication(leaveApplicationData)
      .subscribe(response => {
        // Handle the response (e.g., success message)
      });
  }
}
