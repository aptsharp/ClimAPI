import { WeatherService } from './../../../shared/services/weather.service';
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Store } from '@ngrx/store';

import * as fromHomeActions from './home.actions';

@Injectable()

export class HomeEffects {

    loadCurrentWeather$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromHomeActions.loadCurrentWeather),
            mergeMap(({ query }) => this.weatherService.getCityWeatherByQuery( query)),
            catchError((err, caught$) => {
                this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed());
                return caught$;
            }),
            map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({ entity })),
        ),
    );

    constructor(private actions$: Actions, 
        private store: Store,
        private weatherService: WeatherService) {

    }
}