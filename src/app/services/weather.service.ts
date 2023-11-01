import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherCity } from '../interfaces/weather-city.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherByCity():Observable<WeatherCity> {
    return this.http.get<WeatherCity>(`https://api.openweathermap.org/data/2.5/weather?q=germany&appid=${environments.API_KEY}`);
  }
}
