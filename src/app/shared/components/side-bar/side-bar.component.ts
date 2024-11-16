import { Component } from '@angular/core';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styles: `
  #sidebar{
    height: 100vh;
    width: 250px;
  }

  @media only screen and (max-width: 768px){
    #sidebar{
      height: 200px;
      width: 100%;
    }
  }
  `
})
export class SideBarComponent {

}
