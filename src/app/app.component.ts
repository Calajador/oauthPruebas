import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig, authCodeFlowConfig2 } from './oauth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'oauth-pruebas';

  constructor(private _oauth: OAuthService) {
    this.configureOauth();
  }

  configureOauth() {
    this._oauth.configure(authCodeFlowConfig2);
    this._oauth.tokenValidationHandler = new JwksValidationHandler();
    this._oauth.loadDiscoveryDocumentAndTryLogin();
  }

  logn() {
    this._oauth.initCodeFlow();
  }

  logout() {
    this._oauth.logOut();
  }

  get token() {
    let claims: any = this._oauth.getIdentityClaims();
    return claims ? claims : null;
  }
}
