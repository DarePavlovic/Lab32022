import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  prijavaNaSistem(korisnik, lozinka){
    const podaci = {
      kor_ime:korisnik,
      lozinka: lozinka
    }
    return this.http.post(`${this.uri}/korisnici/prijavaNaSistem`, podaci)
  }

  dohvatiKorisnika(korisnik){
    const podaci = {
      kor_ime:korisnik
    }
    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnika`, podaci)
  }
}
