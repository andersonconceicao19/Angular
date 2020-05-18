import { Injectable } from '@angular/core';

@Injectable()
export class Services {
    constructor() {
        
    }

    GetCursos(){
        return ["Angular", ".NETCore", "Arquitetura de Software"]
    }
}

/**
 * É preciso declarar no Provider essa dependencia (Lá no app module)
 */