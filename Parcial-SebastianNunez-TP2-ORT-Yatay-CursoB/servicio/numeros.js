import ModelFactory from '../model/DAOs/modelFactory.js'
import config from '../config.js'

class Servicio {

    constructor() {
            this.model = ModelFactory.get(config.MODO_PERSISTENCIA)    
        }
        

        async obtenerNumeros() {
            const numeros = await this.model.obtenerNumeros()
            return {numeros}
        }

    
        async obtenerPromedio() {
            const numeros = await this.model.obtenerNumeros()
            const sum = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

            return parseFloat(String(sum / numeros.length))
        }



        async obtenerCantidad() {
            const numeros = await this.model.obtenerNumeros()
            return numeros.length 
        }

        async obtenerMinMax() {
            const numeros = await this.model.obtenerNumeros()
            const max = Math.max(...numeros)
            const min = Math.min(...numeros)

            return {min, max} 
        }

        async guardarNumero(numero) {
            return await this.model.guardarNumero(numero) 
        }
}

export default Servicio
