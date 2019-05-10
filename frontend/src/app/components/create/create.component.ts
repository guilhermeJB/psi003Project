import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  issues: Issue[];
  createForm: FormGroup;
  
    constructor(private issueService: IssueService, private router: Router, private fb: FormBuilder) {
      this.createForm = this.fb.group({
        nome: ['', Validators.required],
        nVig: '',
        diasV: ''
      });
    }
  
    ngOnInit() {
    }

    addIssue(nome, nVig, vigTotal) {
      this.issueService.addIssue(nome, nVig, vigTotal).subscribe(() => {
        this.router.navigate(['/index']);
      });
    }

}
