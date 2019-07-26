import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() eventClick:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clickEvent(e){
    this.eventClick.emit(e);
  }

}
