import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoFullInfoComponent } from './repo-full-info.component';

describe('RepoFullInfoComponent', () => {
  let component: RepoFullInfoComponent;
  let fixture: ComponentFixture<RepoFullInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoFullInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
