import express from 'express';
import Korisnik from '../models/korisnik';


export class KorisnikController{
    prijavaNaSistem = (req:express.Request, res:express.Response)=>{
        let kor_ime = req.body.kor_ime;
        let lozinka = req.body.lozinka;

        Korisnik.findOne({'kor_ime':kor_ime, 'lozinka':lozinka}, (err,korisnik)=>{
            if(err)console.log(err)
            else res.json(korisnik)
        })
    }

    dohvatiKorisnika = (req:express.Request, res:express.Response)=>{
        let kor_ime = req.body.kor_ime;

        Korisnik.findOne({'kor_ime':kor_ime}, (err,korisnik)=>{
            if(err)console.log(err)
            else res.json(korisnik)
        })
}
}