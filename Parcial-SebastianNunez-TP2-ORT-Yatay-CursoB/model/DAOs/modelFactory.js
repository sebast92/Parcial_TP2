import ModelFile from "./numerosFile.js";
import ModelMemory from "./numerosMemory.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'Memory':
                return new ModelMemory()
            
            case 'File':
                return new ModelFile()

            default:
                return new ModelMem()
        }
    }
}

export default ModelFactory