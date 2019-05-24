import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  nome: String;
  issues: Issue[];
  displayedColumns = ['nome', 'nVig', 'data', 'horaI', 'horaF', 'sala'];

  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.nome = params.id;
      this.issueService
      .getIssueById(this.nome)
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
    });
    //*/this.fetchIssues();
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
