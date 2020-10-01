import { DataService } from './../../data.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

declare var Chart: any;

@Component({
  selector: 'app-monthly-sales-chart',
  templateUrl: './monthly-sales-chart.component.html',
  styleUrls: ['./monthly-sales-chart.component.scss'],
})
export class MonthlySalesChartComponent implements AfterViewInit {
  /**
   * AfterViewInit é usado para fazer as coisas depois que o HTML já tenha carregado.
   */
  data: any = '';
  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.dataService
      .getMonthlySalesChartData()
      .subscribe(
        res => {
          this.data = res;
          this.render();
        }
      );
  }
  render()
  {
    const el: any = document.getElementById('myChart');
    const ctx = el.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: this.data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

}
