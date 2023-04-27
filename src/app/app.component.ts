import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  nameInput: string = '';
  dateInput: string='';
  amountInput: string='';
  heightInput: number=0;
  mileInput: number=0;

  car = {
    model: 'BMW', 
    year: 2023, 
    type: 's500'
  }

  onNameChange(value: string){
    this.nameInput = value;
  }
  onDateChange(value: string) {
    this.dateInput = value;
  }

  onAmountChange(value: string){
    this.amountInput = value;
  }

  onHeightChange(value: number){
    this.heightInput = value;
  }

  onMileChange(value: number){
    this.mileInput = value;
  }

}
