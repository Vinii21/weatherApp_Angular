import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherCity } from './interfaces/weather-city.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public weather?: WeatherCity;
  public classCard:boolean = false;
  public showText: boolean = false;

  constructor (private weatherService: WeatherService) {}

  showCard(value: boolean):void {
    this.classCard = value;
    this.showText = !this.showText
    if(this.classCard) {
      setTimeout(()=>{
        this.weather = this.weatherService.weatherData
      },500)
    }
  }

}
