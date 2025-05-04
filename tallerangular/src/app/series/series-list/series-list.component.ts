import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { SeriesService }     from '../series.service';
import { Serie }             from '../serie.model';
import { HttpClientModule }  from '@angular/common/http';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  selected: Serie | null = null;
  avgSeasons = 0;

  constructor(private svc: SeriesService) {}

  ngOnInit(): void {
    this.svc.getSeries().subscribe(data => {
      this.series = data;
      this.avgSeasons = Math.round(
        data.reduce((sum, s) => sum + s.seasons, 0) / data.length
      );
    });
  }

  selectSerie(s: Serie): void {
    this.selected = s;
  }
}



