// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  username: string | undefined;

  constructor(
    public auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log('🔐 ID Token Claims:', claims);
      this.username = claims?.name;
    });
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  userName() {
    return this.auth.user$.pipe(map((user) => user?.name));
  }

  testCallApi() {
    this.auth
      .getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:3000',
          scope: 'openid profile email',
        },
      })
      .subscribe((accessToken) => {
        const payload = JSON.parse(atob(accessToken.split('.')[1]));
        console.log('📦 PAYLOAD TOKEN:', payload); // Afficher le payload du token pour verifier les informations de l'utilisateur.
        // ✅ Logguer l access token ( pour copier dans Swagger ). Ne pas laisser le log, le token est une donnee sensible.
        console.log('🔐 Access Token:', accessToken);

        this.http
          .get('http://localhost:3000/animaux/1', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .subscribe((data) => {
            console.log('🐾 Réponse API sur une route protégée:', data);
          });
      });
  }
}
