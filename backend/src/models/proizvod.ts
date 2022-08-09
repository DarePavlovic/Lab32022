import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Proizvod = new Schema(
    {
        naziv:{
            type:String
        },
        kolicina:{
            type:Number
        },
        proizvodi:{
            type:Array
        }
    }
)

export default mongoose.model('Proizvodi', Proizvod, 'proizvodi');