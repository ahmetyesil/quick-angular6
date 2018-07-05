import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BNGModule} from 'bng-angular-base/bng.module';
import {AppComponent} from './app.component';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ROUTES} from './app.routing';
import {RouterModule} from '@angular/router';

export function generateTranslateStaticLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BNGModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: generateTranslateStaticLoader,
        deps: [
          HttpClient
        ]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
