import {Injectable} from '@angular/core'
import {HEROES} from './mock-heroes'

@Injectable()

export class HeroService {
  getHeroes(){
    return Promise.resolve(HEROES)
  }
  getHeroesSlowly(){
    return new Promise<hero[]>(resolve => setTimeout(()=>resolve(HEROES), 2000)
      )
  }

}