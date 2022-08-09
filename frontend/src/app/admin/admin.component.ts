import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proizvod } from '../models/proizvod';
import { ProizvodiService } from '../services/proizvodi.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private proizvodiService:ProizvodiService, private router:Router) { }

  ngOnInit(): void {
    this.proizvodiService.dohvatiSveProizvode().subscribe((data:Proizvod[])=>{
      this.sviProizvodi = data;
    })

    let korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if(korisnik.tip!='A'){
      this.router.navigate(['']);
    }
  }

  sviProizvodi: Proizvod[];

  dodaj(naziv){
    this.proizvodiService.dodajProizvod(naziv).subscribe((resp=>{
      if(resp['poruka']=='ok'){
        alert('ok');
        this.ngOnInit();
      }
    }))
  }
  ukloni(naziv){
    this.proizvodiService.ukloniProizvod(naziv).subscribe((resp=>{
      if(resp['poruka']=='ok'){
        alert('ok');
        this.ngOnInit();
      }
    }))
  }
}
