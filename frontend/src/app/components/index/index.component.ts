import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
    issues: Issue[];
    displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
  
    constructor(private issueService: IssueService, private router: Router) { }
  
    ngOnInit() {
      this.fetchIssues();
    }
  
    fetchIssues() {
      this.issueService
        .getIssues()
        .subscribe((data: Issue[]) => {
          this.issues = data;
          console.log('Data requested ...');
          console.log(this.issues);
        });
    }
  
    editIssue(id) {
      this.router.navigate([`/edit/${id}`]);
    }
  
    deleteIssue(id) {
      this.issueService.deleteIssue(id).subscribe(() => {
        this.fetchIssues();
      });
    }

}
