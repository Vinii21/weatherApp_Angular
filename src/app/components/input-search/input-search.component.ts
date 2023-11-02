import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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

  showCard():void {
    const newTag = this.tagInput.nativeElement.value;
    if(newTag === ""){
      this.activateClassCard = false;
    } else {
      this.activateClassCard = !this.activateClassCard
    }
    this.classCard.emit(this.activateClassCard)
  }
}
