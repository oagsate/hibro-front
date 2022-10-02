import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RO, User } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  upload(param: any) {
    return this.http.post<string>(`${environment.apiUrl}image`, param);
  }
}
