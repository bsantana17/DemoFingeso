import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../desafio-service.service';
import {Desafio} from '../desafio';

@Component({
  selector: 'app-list-desafio',
  templateUrl: './list-desafio.component.html',
  styleUrls: ['./list-desafio.component.css']
})
export class ListDesafioComponent implements OnInit {
  data: Desafio[] = [];
  desafios: Array<any>;
  isLoadingResults = true;
  constructor(private api: DesafioService) { }

  ngOnInit() {
  	this.api.getAll().subscribe(data => {
      this.desafios = data;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
