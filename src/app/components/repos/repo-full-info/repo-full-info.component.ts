import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-full-info',
  templateUrl: './repo-full-info.component.html',
  styleUrls: ['./repo-full-info.component.css'],
  providers: [ ApiService ],
})
export class RepoFullInfoComponent implements OnInit {
  repoInfo;
  constructor(private apiService: ApiService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.apiService.getRepoFullInfo(params.id)
        .subscribe(data => {
          this.repoInfo = data;
          console.log(data);
        },
        error => {this.router.navigate(["/404"])}
        )
      },
      error => {this.router.navigate(["/404"])}
    );
  }

}
