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
    }

    addIssue(title, responsible, description, severity) {
      this.issueService.addIssue(title, responsible, description).subscribe(() => {
        this.router.navigate(['/index']);
      });
    }
  
    /*consultarVigilancia(nome) {
      this.router.navigate([`/consult/${nome}`]);
    }*/

}
