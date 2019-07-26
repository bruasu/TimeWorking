import { Component, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewContainer = 'dashboard';

  @ViewChild("Dapp",{static: true}) Dapp;

  constructor(
    private render: Renderer2
  ){}
  
  eventHeader(e){
    if(e == "toggleButton"){

      let verificExists = false;

      for(let i = 0; i < this.Dapp.nativeElement.classList.length; i++){
        if(this.Dapp.nativeElement.classList[i] == "sidenav-toggled"){
          verificExists =true;
        } 
      }
      if(!verificExists){
        this.render.addClass(this.Dapp.nativeElement, 'sidenav-toggled');
      }else{
        this.render.removeClass(this.Dapp.nativeElement, 'sidenav-toggled');
      }
    }
  if(e == "menuHide"){
    let verificExists = false;

      for(let i = 0; i < this.Dapp.nativeElement.classList.length; i++){
        if(this.Dapp.nativeElement.classList[i] == "sidenav-toggled"){
          verificExists =true;
        } 
      }
      if(!verificExists){
        this.render.addClass(this.Dapp.nativeElement, 'sidenav-toggled');
      }
      if(document.body.clientWidth < 760){
        this.render.removeClass(this.Dapp.nativeElement, 'sidenav-toggled');        
      }
  }
  }
  eventMenu(e){  
    this.viewContainer = e;
    this.eventHeader("menuHide");
  }

}
