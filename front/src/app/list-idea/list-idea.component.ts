import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea-service.service';
import {Idea} from '../idea';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.css']
})
export class ListIdeaComponent implements OnInit {
  ideas: Array<any>;
  isLoadingResults = true;
  constructor(private api: IdeaService) { }

  ngOnInit() {
  	this.api.getAll().subscribe(data => {
      this.ideas = data;
      console.log(data);
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
