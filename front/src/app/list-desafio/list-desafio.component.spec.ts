import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesafioComponent } from './list-desafio.component';

describe('ListDesafioComponent', () => {
  let component: ListDesafioComponent;
  let fixture: ComponentFixture<ListDesafioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesafioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
