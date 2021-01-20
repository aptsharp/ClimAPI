import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home') ;

export const selectCurrentWeather = createSelector(
    selectHomeState,
    (HomeState: HomeState) => HomeState.entity,
);
export const selectCurrentWeatherLoading = createSelector(
    selectHomeState,
    (HomeState: HomeState) => HomeState.loading,
);
export const selectCurrentWeatherError = createSelector(
    selectHomeState,
    (HomeState: HomeState) => HomeState.error,
);