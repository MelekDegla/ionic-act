import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private header;
  constructor(private http: HttpClient) {
  }

  // getAnnonceById( id: string ){
  //     return this.annonces.find(
  //     annonce => annonce.id === id
  //     );
  // }

  public findAll5(): Observable<any> {
    this.header = new HttpHeaders({'Accept': 'application/json'});
    return this.http.get('http://127.0.0.1:8000/api/actualites', {headers: this.header });
  }
  public findone(id): Observable<any> {
    this.header = new HttpHeaders({'Accept': 'application/json'});
    return this.http.get('http://127.0.0.1:8000/api/actualites/' + id, {headers: this.header });
  }
}
