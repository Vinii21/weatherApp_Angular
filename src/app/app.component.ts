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
  public url: string = ""

  constructor (private weatherService: WeatherService) {}

  showCard(value: boolean):void {
    this.classCard = value;
    if(this.classCard) {
      setTimeout(()=>{
        this.showText = true;
        this.weather = this.weatherService.weatherData;
        this.description = this.weather?.weather[0].description;
        this.url = this.weatherService.icons[0]
      },1000)
    } else {
      this.showText = false;
    }
  }

}
