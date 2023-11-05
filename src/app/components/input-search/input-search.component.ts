import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {

  @ViewChild("search")
  public tagInput!: ElementRef<HTMLInputElement>

  @Output()
  public classCard: EventEmitter<boolean> = new EventEmitter();

  private activateClassCard: boolean = false;

  constructor (private weatherService: WeatherService) {};

  getWeatherCity():void {
    const nameCity = this.tagInput.nativeElement.value;
    this.weatherService.getWeatherByCity(nameCity)
    .subscribe((data)=>{
      this.weatherService.weatherData = data;
    })
  };

  showCard():void {
    const newTag = this.tagInput.nativeElement.value;
    if(newTag === ""){
      this.activateClassCard = false;
    } else if(newTag !== ""  && this.activateClassCard) {
      this.activateClassCard = false;
    } else if(newTag !== "") {
      this.activateClassCard = true;
      this.getWeatherCity();
    }
    this.classCard.emit(this.activateClassCard);
  };

}
