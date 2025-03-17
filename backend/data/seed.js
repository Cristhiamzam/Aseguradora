import dotenv from 'dotenv'
import { db } from '../config/db.js'
import Services from '../models/Services.js'
import { services } from './polizaServices.js'

dotenv.config()
await db()

async function seedDB(){
    try {
        await Services.insertMany(services)
        console.log('Los Datos se Agregaron Correctamente!!!')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

function clearDB(){

}

if(process.argv[2] === '--import'){
    seedDB()
}else{
    clearDB
}