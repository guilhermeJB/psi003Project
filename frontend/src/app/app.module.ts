import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppBootstrapModule } from './styles/app-bootstrap.module';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './components/create/create.component';
import { ConsultComponent } from './components/consult/consult.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';


import { IssueService } from './issue.service';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'create', component: CreateComponent},
  { path: 'consult', component: ConsultComponent},
  { path: 'availability', component: AvailabilityComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ConsultComponent,
    AvailabilityComponent,
    IndexComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule, 
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    AppBootstrapModule 
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
