import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherCity } from './interfaces/weather-city.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

  public weather?: WeatherCity;
  public classCard:boolean = false

  constructor (private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherByCity()
      .subscribe((data)=>{
        this.weather = data;
        console.log(this.weather)
      })
  }

  showCard(value: boolean):void {
    this.classCard = value;
  }

}
