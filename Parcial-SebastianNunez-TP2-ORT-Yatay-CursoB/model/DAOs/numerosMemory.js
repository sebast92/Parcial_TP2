class ModelMemory {
    constructor() {
        this.numeros = []
    }

    obtenerNumeros = async () => {
            return await Promise.resolve(this.numeros)
    }
    
    guardarNumero = async numero => {
        await Promise.resolve(this.numeros.push(numero))
    
        return numero
    }
}

export default ModelMemory