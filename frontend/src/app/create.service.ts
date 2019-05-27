import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  uri = 'localhost:3003';

  constructor(private http: HttpClient) { }

  uploadFile(file) {
    const fd = new FormData();
    fd.append('file', file, file.name); 
    return this.http.post(`${this.uri}/exames`, fd);
  }

}
