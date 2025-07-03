import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-animaux',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './liste-animaux.component.html',
})
export class ListeAnimauxComponent implements OnInit {
  displayedColumns: string[] = ['name', 'species', 'health', 'action'];
  dataSource: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:3000/animaux')
      .subscribe((animaux) => {
        this.dataSource = animaux;
      });
  }
}
