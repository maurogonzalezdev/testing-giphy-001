import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'giphy-project'

  public isMobile: boolean = false;

  ngOnInit(): void {
    window.addEventListener('resize', ()=>{

      if(window.innerWidth <= 768){
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }

    });
  }
}
