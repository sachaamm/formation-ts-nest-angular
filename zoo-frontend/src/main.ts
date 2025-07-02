import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-5avwbr3xeo58ok1s.us.auth0.com', // Mettre a jour le domaine ici
      clientId: 'HLnNJmUNdlx4zBF1v2JcCVPqqpQNeaKj', // Mettre a jour le client id ici
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'http://localhost:3000',
        scope: 'openid profile email',
      },
    }),
  ],
});
