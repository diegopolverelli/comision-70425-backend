import fs from "fs"

export class HeroesManager{
    static path="./src/data/heroes.json"
    static async getHeroes(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }
}