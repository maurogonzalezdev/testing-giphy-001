import { Component } from '@angular/core';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styles: `
  #sidebar{
    height: 200px;
    width: 100%;
  }

  @media only screen and (min-width: 768px){
    #sidebar{
      height: 100vh;
      width: 200px;
    }
  }
  `
})
export class SideBarComponent {

}
