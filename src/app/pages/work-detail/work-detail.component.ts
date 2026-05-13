import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Work } from '../../models/work.model';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  work: Work | undefined;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workService.getWorkById(id).subscribe(work => {
        if (!work) {
          this.router.navigate(['/works']);
        } else {
          this.work = work;
        }
      });
    }
  }
}