import { Injectable } from '@angular/core';
import { WORKS_DATA } from '../data/works-data';
import { Work } from '../models/work.model';
import { of, Observable } from 'rxjs';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() { }

  getWorks(): Observable<Work[]> {
    return of(WORKS_DATA);
  }
  

  getFeaturedWorks(count: number): Observable<Work[]> {
    return of(WORKS_DATA.slice(0, count));
  }

  getWorkById(id: string): Observable<Work | undefined> {

    const numericId = parseInt(id, 10);
    return of(WORKS_DATA.find(work => work.id === numericId));
  }}