import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringConnService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllBambini() {
    return this.http.get(`${this.baseUrl}/getAllBambini`);
  }

  getAllPet() {
    return this.http.get(`${this.baseUrl}/getAllPet`);
  }

  getMedia() {
    return this.http.get(`${this.baseUrl}/mediaPetsPerBambino`);
  }

  addBambinoToPet(petId: number, bambinoId: number): Observable<any> {
    const url = `${this.baseUrl}/pet/${petId}/bambini/${bambinoId}`;
    const data = {};
    return this.http.post(url, data);
  }
}
