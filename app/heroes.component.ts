import {Component, OnInit} from '@angular/core'
import {Hero} from './hero'
import {HeroService} from './hero.service'
import {HeroDetailComponent} from './hero-detail.component'
import {Router} from '@angular/router-deprecated'


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:['app/heroes.component.css'],
  providers: [HeroService],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private heroService: HeroService,
    private router: Router){}

  ngOnInit(){
    this.getHeroes()
  }


  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.addingHero = false;
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  gotoDetail(){
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}])
  }

  addHero(){
    this.addingHero = true;
    this.selectedHero = null;
  }
  delete(hero: Hero, event: any){
    event.stopPropogation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      })
      .catch(error => this.error = error)
  }
  close(savedHero: Hero){
    this.addingHero = false;
    if (savedHero){this.getHeroes();}
  }

}

