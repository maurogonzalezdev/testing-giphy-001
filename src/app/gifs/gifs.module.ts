import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifsRoutingModule } from './gifs-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [HomePageComponent, SearchBarComponent],
  imports: [CommonModule, GifsRoutingModule],
  exports: [],
})
export class GifsModule {}
