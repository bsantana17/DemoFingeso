import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../idea-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent{
  idea: any = {};
  constructor(private route: ActivatedRoute,
              private router: Router,
              private ideaService: IdeaService) { }

  gotoList() {
    this.router.navigate(['/ideas']);
  }
  save(form: NgForm) {
    this.ideaService.save(form).subscribe(result => {
      console.log(form);
      this.gotoList();
    }, error => console.error(error));
  }
}
