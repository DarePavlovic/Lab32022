import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Proizvod } from '../models/proizvod';
import { KorisnikService } from '../services/korisnik.service';
import { ProizvodiService } from '../services/proizvodi.service';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  constructor(private proizvodService:ProizvodiService, private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.proizvodService.dohvatiSveProizvodeKojihImaNaStanju().subscribe((data:Proizvod[])=>{
      this.proizvodi = data;
    })
  }
  proizvodi: Proizvod [];

  kupi(){
    this.proizvodi.forEach((proizvod)=>{
      if(proizvod.zaKupovinu){
        this.proizvodService.kupiProizvod(proizvod.naziv, this.korisnik.kor_ime).subscribe((resp)=>{
          if(resp['poruka']!='ok'){
            alert('Greska');
          }
          else{
            this.korisnikServis.dohvatiKorisnika(this.korisnik.kor_ime).subscribe((kor:Korisnik)=>{
              this.korisnik=kor;
            })
            this.ngOnInit()
          }
        });
      }
    })
  }
  korisnik: Korisnik;

  proizvod:string;
  ocena:string;

  oceni(){
    this.proizvodService.oceniProizvod(this.proizvod, parseInt(this.ocena)).subscribe((resp)=>{
      if(resp['poruka']='ok'){
        alert('ocena dodata');
      }
    })
  }
}
