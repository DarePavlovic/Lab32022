import express from 'express';
import { ProizvodController } from '../controllers/proizvod.controller';

const proizvodiRouter = express.Router();

proizvodiRouter.route('/dohvatiSveProizvodeKojihImaNaStanju').get(
    (req, res)=> new ProizvodController().dohvatiSveProizvodeKojihImaNaStanju(req, res)
)

proizvodiRouter.route('/kupiProizvod').post(
    (req, res)=> new ProizvodController().kupiProizvod(req, res)
)

proizvodiRouter.route('/oceniProizvod').post(
    (req, res)=> new ProizvodController().oceniProizvod(req, res)
)

proizvodiRouter.route('/dohvatiSveProizvode').get(
    (req, res)=> new ProizvodController().dohvatiSveProizvode(req, res)
)
proizvodiRouter.route('/dodajProizvod').post(
    (req, res)=> new ProizvodController().dodajProizvod(req, res)
)
proizvodiRouter.route('/ukloniProizvod').post(
    (req, res)=> new ProizvodController().ukloniProizvod(req, res)
)

export default proizvodiRouter;