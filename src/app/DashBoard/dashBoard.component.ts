import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Authentication} from '../Auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashBoard',
  //template : '<app-pie-chart></app-pie-chart>',
  templateUrl: './dashBoard.component.html',
  styleUrls: [ './dashBoard.component.css' ]
})
export class DashBoardComponent implements OnInit {

  welcomeMessage : string = "";
 // private userSub : Subscription;

  constructor(private auth : Authentication){

  }

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.auth.User1.subscribe( data => {
      console.log("getting user name for dashboard"+data.email)
      this.welcomeMessage = "Welcome "+data.email;
    })
 
  }

  logOut(){
    this.auth.User1.next(null);
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Development', weight: 'ASAP Upgrade', symbol: '18/12/2019'},
  {position: 2, name: 'SIT', weight: 'siebel r1', symbol: '18/12/2019'},
  {position: 3, name: 'UT', weight: 'gold', symbol: '18/12/2019'},
  {position: 4, name: 'Support', weight: 'Digital', symbol: '18/12/2019'},
  {position: 5, name: 'Learning', weight: 'Angular' , symbol: '18/12/2019'},
];