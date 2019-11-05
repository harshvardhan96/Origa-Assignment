import { GetDataServiceService } from './get-data-service.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'origa-assignment';
  data : any;
  isDataLoading :boolean = false;
  percentage : any;
  highcharts = Highcharts;
   chartOptions = {   
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Address Data'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
    colorByPoint: true,
    data: []
    }]
   };

   constructor(private serviceObject : GetDataServiceService){
    this.isDataLoading = true;
   }

   ngOnInit(){
       
       this.serviceObject.getData().subscribe(resp =>{
        this.data = resp;
        console.log(this.data);
        this.percentage = (this.data.length/100)*100;
        let latGreater = this.data.filter( x => x.address.geo.lat > 0).length;
        let latLesser = this.data.filter( x => x.address.geo.lat < 0).length;
        let lngGreater = this.data.filter( x => x.address.geo.lng > 0).length;
        let lngLesser = this.data.filter( x => x.address.geo.lng < 0).length;
        console.log(latGreater);
        console.log(latLesser);
        console.log(lngGreater);
        console.log(lngLesser);
        this.chartOptions.series[0].data.push({name:'Latitude > 0',y:latGreater});
        this.chartOptions.series[0].data.push({name:'Latitude < 0',y:latLesser});
        this.chartOptions.series[0].data.push({name:'Longitute > 0',y:lngGreater});
        this.chartOptions.series[0].data.push({name:'Longitute < 0',y:lngLesser});
        this.isDataLoading = false;
      });
   }

}
