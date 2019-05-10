import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  name: String;
  issues: Issue[];
  displayedColumns = ['nome', 'numero de vigilâncias', 'dias das vigilâncias'];

  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router) {

  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.name = params.name;
      this.issueService.getIssueById(this.name).subscribe(res => {
        this.issue = res;
        this.updateForm.get('nome').setValue(this.issue.nome);
        this.updateForm.get('nVig').setValue(this.issue.nVig);
        this.updateForm.get('vigTotal').setValue(this.issue.vigTotal);
      });
    });*/
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
}
/*  updateIssue(title, responsible, description, severity, status) {
    this.issueService.updateIssue(this.name, title, responsible, description, severity, status).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }*/
