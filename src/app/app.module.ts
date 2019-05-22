import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaginaUnoPage } from '../pages/pagina-uno/pagina-uno';
import { MyListPage } from '../pages/my-list/my-list';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCNg5IeCNl9hY6BmbZfPVGKqq_OjCLBql4",
  authDomain: "appmoetastic.firebaseapp.com",
  databaseURL: "https://appmoetastic.firebaseio.com",
  projectId: "appmoetastic",
  storageBucket: "appmoetastic.appspot.com",
  messagingSenderId: "1073951854621",
  appId: "1:1073951854621:web:f91249a901777ad4"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PaginaUnoPage,
    MyListPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'appmoetastic'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PaginaUnoPage,
    MyListPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
