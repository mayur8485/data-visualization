import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HeaderComponent } from './header/header.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { NgbNavModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './charts/chart/chart.component';
import { ModalComponent } from './modal/modal.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { HomeComponent } from './home/home.component';
import { ViewCardsComponent } from './home/view-cards/view-cards.component';
import { ContactComponent } from './home/contact/contact.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    HeaderComponent,
    NavTabComponent,
    PieChartComponent,
    BarChartComponent,
    ChartComponent,
    ModalComponent,
    LineChartComponent,
    HomeComponent,
    ViewCardsComponent,
    ContactComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    NgbNavModule,
    NgbTooltip,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
