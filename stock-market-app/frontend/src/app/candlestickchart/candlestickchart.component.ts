import { Component, OnInit, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { StockPrice } from '../models/StockPrice';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { utils } from 'xlsx/types';
import { Company } from '../models/Company';
import { CompanyService } from '../services/company.service';
@Component({
  selector: 'app-candlestickchart',
  templateUrl: './candlestickchart.component.html',
  styleUrls: ['./candlestickchart.component.css']
})
export class CandlestickchartComponent implements OnInit {
  types: string[] = ['line', 'stackedline', 'fullstackedline'];
  id="";
  stockprices: StockPrice[];
  company: Company;
  constructor(private route: ActivatedRoute, service: StockPriceService,companyService: CompanyService) {
    this.route.params.subscribe( params => this.id=params.id );
    
    companyService.getCompany(this.id).subscribe(response=>{
      console.log("Company: "+response)
      this.company=response
      const labels = [];
      var data=[];
      this.stockprices=this.company.stockPrice
      for(var i=0;i<this.stockprices.length;i++){
        labels.push(this.stockprices[i].timee+"\n"+this.stockprices[i].datee)
        data.push(this.stockprices[i].shareprice)
      }

      const myChart = new Chart("myChart", {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Line chart',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
          }]
        },
        options: {
        
        }
    });
    })   
  }
  ngOnInit(): void {
    
  }

}
