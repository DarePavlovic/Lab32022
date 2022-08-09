import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiSveProizvodeKojihImaNaStanju(){
    
    return this.http.get(`${this.uri}/proizvodi/dohvatiSveProizvodeKojihImaNaStanju`)
  }

  dohvatiSveProizvode(){
    
    return this.http.get(`${this.uri}/proizvodi/dohvatiSveProizvode`)
  }
  
  kupiProizvod(nazivP, korisnik){
    const podaci = {
      naziv:nazivP,
      kor_ime:korisnik
    }
    return this.http.post(`${this.uri}/proizvodi/kupiProizvod`,podaci)
  }
  oceniProizvod(naziv, ocena){
    const podaci={
      naziv:naziv,
      ocena:ocena
    }
    return this.http.post(`${this.uri}/proizvodi/oceniProizvod`,podaci)
  }

  dodajProizvod(naziv){
    const podaci={
      naziv:naziv
    }
    return this.http.post(`${this.uri}/proizvodi/dodajProizvod`,podaci)
  }
  ukloniProizvod(naziv){
    const podaci={
      naziv:naziv
    }
    return this.http.post(`${this.uri}/proizvodi/ukloniProizvod`,podaci)
  }

}
