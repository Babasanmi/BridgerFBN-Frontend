import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  _btnText: string;

  get btnText(): string{
    return this._btnText;
  }
  
  @Input()
  set btnText(btnText: string){
    this._btnText = btnText;
  }
  constructor() { }
  

  @Output() clicker = new EventEmitter();

  onClick(){
      this.clicker.emit()
  }
  ngOnInit(): void {
  }

}
