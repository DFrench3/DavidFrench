import { NgModule } from '@angular/core';
import { RecaptchaModule } from "ng-recaptcha";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './Header/heading/heading.component';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { ContentComponent } from './Content/home-content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioContentComponent } from './Content/Portfolio/portfolio-content/portfolio-content.component';
import { PortfolioContentCardComponent } from './Content/Portfolio/portfolio-content-card/portfolio-content-card.component';
import { PortfolioContentCardButtonComponent } from './Content/Portfolio/portfolio-content-card/portfolio-content-card-button/portfolio-content-card-button.component';
import { ServicesContentComponent } from './Content/services-content/services-content/services-content.component';
import { ServicesCardComponent } from './Content/services-content/services-card/services-card.component';
import { ContactContentComponent } from './Content/Contact/contact-content/contact-content.component';
import { ServicesPackageComponent } from './Content/services-content/services-package/services-package/services-package.component';
import { ServicesResponsiveComponent } from './Content/services-content/services-package/services-responsive/services-responsive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Content/about/about.component';
import { HomeCardComponent } from './Content/home-content/home-card/home-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    PortfolioContentComponent,
    PortfolioContentCardComponent,
    PortfolioContentCardButtonComponent,
    ServicesContentComponent,
    ServicesCardComponent,
    ContactContentComponent,
    ServicesPackageComponent,
    ServicesResponsiveComponent,
    AboutComponent,
    HomeCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
