import { HomeEffects } from './state/home.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { homeReducer } from './state/home.reducer';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
       
  ],
  declarations: [
    HomePage,
  ],
})
export class HomeModule { }