import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://appserver.alunos.di.fc.ul.pt:3003';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(name) {
    return this.http.get(`${this.uri}/issues/${name}`);
  }

  addIssue(title, responsible, description) {
    const issue = {
      nome: title,
      nVig: responsible,
      vigTotal: description
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id){
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
