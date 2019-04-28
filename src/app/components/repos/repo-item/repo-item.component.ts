import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent {
  @Input() repo;
  constructor(private router: Router) { }

  onClick() {
    console.log('click');
    this.router.navigate([`/repos/${this.repo.name}`]);
  }

}
