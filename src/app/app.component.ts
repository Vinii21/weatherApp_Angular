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
  public description?: string;
  public celcius?: number;
  public classCard:boolean = false;
  public showText: boolean = false;
  public icon: number = 0;
  public size: number = 100;
  public loading: boolean = false;

  constructor (private weatherService: WeatherService) {}

  showCard(value: boolean):void {
    this.loading = true;
    this.classCard = value;
    if(this.classCard) {
      setTimeout(()=>{
        this.showText = true;
        this.getData()
      },1000)
    } else {
      this.showText = false;
    }
    this.loading = false;
  }

  getData():void {
    this.weather = this.weatherService.weatherData;
    this.description = this.weather?.weather[0].description;
    const weatherMain = this.weather?.weather[0].main;
    if(weatherMain === "Clear") {this.icon = 0; this.size = 100};
    if(weatherMain === "Thunderstorm") {this.icon = 4; this.size = 100};
    if(weatherMain === "Rain") {this.icon = 3; this.size = 100};
    if(weatherMain === "Clouds") {this.icon = 1; this.size = 100};
  }

  weatherDataState(state: boolean):void {
    if(state) {
      this.loading = state;
    } else {
      this.loading= state
    }
  }
}
