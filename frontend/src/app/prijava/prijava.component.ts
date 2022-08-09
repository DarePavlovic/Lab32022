import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { KorisnikComponent } from '../korisnik/korisnik.component';
import { Korisnik } from '../models/korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private router:Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;
  greska:string;

  prijava(){
    this.korisnikServis.prijavaNaSistem(this.kor_ime, this.lozinka).subscribe((kor:Korisnik)=>{
      
      if(kor){
        localStorage.setItem('ulogovan', JSON.stringify(kor));
        if(kor.tip=='S'){
          this.router.navigate(['korisnik'])
        }
        else
        this.router.navigate(['admin'])
      }
      else{
        this.greska='Greska'
      }
      }
      )
  }

}
