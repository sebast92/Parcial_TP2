import fs from 'fs'
import config from '../../config.js'

class ModelFile {

    constructor() {
        this.nombreArchivo = config.NOMBRE_ARCHIVO_NUMEROS
    }

    obtenerNumeros = async () => {
        try {
            const numeros = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'))
            return numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros en modelo tipo FILE', error)
        }
    }

    guardarNumero = async numero => {
        let numeros = []
        try {
            numeros = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'))
        }
        catch(error) {
            console.log('error en guardarNumero en modelo tipo FILE', error)
        }

        numeros.push(numero)
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(numeros, null, '\t'))

        return numero
    }
}
export default ModelFile