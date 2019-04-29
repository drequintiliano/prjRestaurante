import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsServices,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
