export interface ipokeapi{
    sprites: Isprites,
    name: string,
    id:number,
    abilities: Iability,
    height: number,
    base_experience: number
    
}

interface Isprites{
    other: Iimagen
}
interface Iimagen{
    dream_world: Img
}
interface Img{
    front_default: string
}

interface Iability{
 ability:Inombre
}

interface Inombre{
    name:string
}

