import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'giphy-project';

  public isMobile?: boolean;
  public isBrowser?: boolean;

  constructor(@Inject(PLATFORM_ID) private _platformId: any) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this._platformId)) {
     this.isBrowser = true;

      if (document.readyState == 'interactive') {
        this.changeMobileStatus(window);
      }

    }

  }

  @HostListener('window: resize', ['$event'])
  onResize(event: Event) {
    this.changeMobileStatus(event.target as Window);
  }

  private changeMobileStatus(w: Window): void {
    if (w.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
