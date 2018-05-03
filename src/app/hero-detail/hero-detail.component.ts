import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;
    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {

    }

    goBack() {
        return this.location.back();
    }
  ngOnInit() {
      this.getHero();
  }

}
