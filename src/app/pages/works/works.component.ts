import { Component, OnInit } from '@angular/core';
import { Work } from '../../models/work.model';
     
import { RouterModule } from '@angular/router';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  allWorks: Work[] = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getWorks().subscribe(works => {
      this.allWorks = works;
    });
  }
}