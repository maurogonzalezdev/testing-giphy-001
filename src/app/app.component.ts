import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'giphy-project';

  public isMobile?: boolean;

  constructor() {}

  ngOnInit(): void {
    if (document.readyState == 'interactive') {
      this.changeMobileStatus(window);
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
