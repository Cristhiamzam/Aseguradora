import mongoose from 'mongoose'

const servicesSchema = mongoose.Schema({
    numeroPoliza: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    tipoPoliza: {
        type: String,
        required: true,
        trim: true,
        enum: ['Auto', 'Vida', 'Hogar', 'Salud']
    },
    titular: {
        type: String,
        required: true,
        trim: true
    },
    monto: {
        type: Number,
        required: true,
        trim: true
    }
})
const Services = mongoose.model('Services', servicesSchema)
export default Services