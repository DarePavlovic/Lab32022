import { Proizvod } from "./proizvod";

export class Korisnik{

    kor_ime:string;
    lozinka:string;
    ime:string;
    prezime:string;
    mejl:string;
    tip:string;
    proizvodi: Array<Proizvod>;
}