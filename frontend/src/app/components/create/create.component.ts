import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { CreateService } from '../../create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  selectedFile: File = null;

  constructor(private createService: CreateService, private router: Router) {}

  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }

  onUpload(){
    this.createService.uploadFile(this.selectedFile).subscribe(() => {
      this.router.navigate(['/index']);
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
