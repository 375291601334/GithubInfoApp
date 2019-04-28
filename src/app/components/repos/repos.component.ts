import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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

  ngOnInit() {
    this.apiService.getRepos()
      .subscribe(data => {
        this.repos = data;
      });
  }
}
