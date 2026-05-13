import { Component, OnInit } from '@angular/core';
import { Work } from '../../models/work.model';

import { RouterModule } from '@angular/router';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredWorks: Work[] = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getFeaturedWorks(3).subscribe(works => {
      this.featuredWorks = works;
    });
  }
}