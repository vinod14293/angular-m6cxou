import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  template: `<div #pieChart style="width: 100%; height: 90%"></div>`
})
export class PieChartComponent implements AfterViewInit{

  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Day', 'Hours per Day'],
    ['Monday', 9],
    ['Tuesday', 6],
    ['Wednesday', 3],
    ['Thurseday', 9],
    ['friday', 5]
  ]);

  const options = {
    title: 'My Daily Activities',
    legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
}