import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ListType, RO, Journal } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Journal[]>('/api/journal').pipe(
      tap((v) => {
        v.forEach((item: any) => {
          item.type = ListType.Journal;
        });
      })
    );
  }

  getByUid(uid: number) {
    return this.http.get<Journal[]>(`/api/journal/getByUid/${uid}`).pipe(
      tap((v) => {
        v.forEach((item: any) => {
          item.type = ListType.Journal;
        });
      })
    );
  }

  getById(id: number) {
    return this.http.get<Journal>(`/api/journal/${id}`);
  }

  create(param: any) {
    return this.http.post<any>('/api/journal', param);
  }

  delete(id: number) {
    return this.http.delete<any>('/api/journal', { params: { id } });
  }
}
