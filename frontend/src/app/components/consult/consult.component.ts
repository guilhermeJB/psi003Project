import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  name: String;
  issue: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      nVig: '',
      vigTotal: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.issueService.getIssueById(this.name).subscribe(res => {
        this.issue = res;
        this.updateForm.get('nome').setValue(this.issue.nome);
        this.updateForm.get('nVig').setValue(this.issue.nVig);
        this.updateForm.get('vigTotal').setValue(this.issue.vigTotal);
      });
    });
  }

  updateIssue(title, responsible, description, severity, status) {
    this.issueService.updateIssue(this.name, title, responsible, description, severity, status).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issue = data;
        console.log('Data requested ...');
        console.log(this.issue);
      });
  }

}
