import { GetDataServiceService } from './get-data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { HighchartsChartComponent } from 'highcharts-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [GetDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
