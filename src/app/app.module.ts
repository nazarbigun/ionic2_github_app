import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import {TranslateModule} from 'ng2-translate/ng2-translate';
import {TranslateLoader} from 'ng2-translate';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { CodePage } from '../pages/code/code.component';
import { RepositoriesPage } from '../pages/repositories/repositories.component';
import { UsersPage } from '../pages/users/users.component';
import { IssuesPage } from '../pages/issues/issues.component';
import { CommitsPage } from '../pages/commits/commits.component';

import { Users } from '../providers/users';
import { Issues } from '../providers/issues';
import { Repositories } from '../providers/repositories';
import { Commits } from '../providers/commits';
import { Code } from '../providers/code';

import { createTranslateLoader } from '../services/translate-module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    CodePage,
    RepositoriesPage,
    UsersPage,
    IssuesPage,
    CommitsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    CodePage,
    RepositoriesPage,
    UsersPage,
    IssuesPage,
    CommitsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    Issues,
    Repositories,
    Commits,
    Code
  ]
})
export class AppModule {}
