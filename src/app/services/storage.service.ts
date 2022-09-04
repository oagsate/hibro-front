import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    const str = localStorage.getItem(key);
    if (str) {
      return JSON.parse(str);
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
