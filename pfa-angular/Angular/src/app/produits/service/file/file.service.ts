import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  addImage(image)  {
    return this.http.post(`http://localhost:8080/uploadFile`, image);
  }

  getImage(fileName) {
    return this.http.get<File>(`http://localhost:8080/downloadFile/${fileName}`);
  }
}
