import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [ ApiService ],
})
export class UserInfoComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  user;

  ngOnInit() {
    this.apiService.getUser()
      .subscribe(
        data => {
          this.user = data;
        },
        error => this.router.navigate(['/404'])
      );
  }

}
