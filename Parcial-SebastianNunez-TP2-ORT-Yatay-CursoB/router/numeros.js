import express from 'express'
import Controlador from '../controlador/numeros.js'

class Router {

    constructor() {
        this.controlador = new Controlador()
        this.router = express.Router()
    }

    start() {
        this.router.get('/entrada', this.controlador.obtenerNumeros)
        this.router.get('/cantidad', this.controlador.obtenerCantidad)
        this.router.get('/promedio', this.controlador.obtenerPromedio)
        this.router.get('/minmax', this.controlador.obtenerMinMax)

        this.router.post('/entrada', this.controlador.guardarNumero)

        return this.router
    }
}

export default Router