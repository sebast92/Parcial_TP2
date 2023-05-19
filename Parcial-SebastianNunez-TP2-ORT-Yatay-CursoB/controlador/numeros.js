import Servicio from '../servicio/numeros.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerNumeros = async (req, res) => {
        try {
            const numeros = await this.servicio.obtenerNumeros()

            res.json(numeros)
            //res.send(numeros)  tiene que ser {numeros: [1, 2, ..]}
        }
        catch(error) {
            console.log('error obtenerNumeros', error)
        }
    }

    obtenerPromedio = async (req, res) => {
        try {
            const promedio = await this.servicio.obtenerPromedio()
            res.json({promedio})
        }
        catch(error) {
            console.log('error obtenerPromedio', error)
        }
    }


    obtenerCantidad = async (req, res) => {
        try {
            const cantidad = await this.servicio.obtenerCantidad()
            res.send({cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidad', error)
        }
    }

    obtenerMinMax = async (req, res) => {
        try {
            const minmax = await this.servicio.obtenerMinMax()
            res.send(minmax)
        }
        catch(error) {
            console.log('error obtenerCantidad', error)
        }
    }

    guardarNumero = async (req, res) => {
        try {
            const numero = Number(req.body.numero)
            //const numero = numeroObj.numero

            //console.log(numeroObj)
            //console.log(numero)

            const numeroGuardado = await this.servicio.guardarNumero(numero)

            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error guardarNumero', error)
        }
    }
}

export default Controlador
