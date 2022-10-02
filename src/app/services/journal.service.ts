import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListType, RO, Journal } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Journal[]>(`${environment.apiUrl}journal`).pipe(
      tap((v) => {
        v.forEach((item: any) => {
          item.type = ListType.Journal;
        });
      })
    );
  }

  getByUid(uid: number) {
    return this.http
      .get<Journal[]>(`${environment.apiUrl}journal/getByUid/${uid}`)
      .pipe(
        tap((v) => {
          v.forEach((item: any) => {
            item.type = ListType.Journal;
          });
        })
      );
  }

  getById(id: number) {
    return this.http.get<Journal>(`${environment.apiUrl}journal/${id}`);
  }

  create(param: any) {
    return this.http.post<any>(`${environment.apiUrl}journal`, param);
  }

  update(param: any) {
    return this.http.put<any>(`${environment.apiUrl}journal`, param);
  }

  delete(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}journal`, {
      params: { id },
    });
  }
}
