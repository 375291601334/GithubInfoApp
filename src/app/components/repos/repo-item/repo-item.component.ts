import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {
  @Input() repo;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    console.log('click');
    this.router.navigate([`/repos/${this.repo.name}`]);
  }

}
