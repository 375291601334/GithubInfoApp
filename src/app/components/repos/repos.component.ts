import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  providers: [ ApiService ],
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {
  constructor(private apiService: ApiService ) { }
  repos = [];
  searchString = '';
  private subj = new Subject<string>();

  ngOnInit() {
    this.subj
    .pipe ( debounceTime(2000) )
    .subscribe(text => {
      this.searchString = text;
    });

    this.apiService.getRepos()
      .subscribe(data => {
        this.repos = data;
      });
  }

  changeSearchString(text): void {
    this.subj.next(text);
  }

}
