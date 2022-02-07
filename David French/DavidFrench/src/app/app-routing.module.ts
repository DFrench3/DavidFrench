import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Content/about/about.component';
import { ContactContentComponent } from './Content/Contact/contact-content/contact-content.component';
import { ContentComponent } from './Content/home-content/content.component';
import { PortfolioContentComponent } from './Content/Portfolio/portfolio-content/portfolio-content.component';
import { ServicesContentComponent } from './Content/services-content/services-content/services-content.component';

const routes: Routes = [
  {path: '', component:ContentComponent},
  {path: 'Portfolio', component:PortfolioContentComponent},
  {path: 'Services', component:ServicesContentComponent},
  {path: 'Contact', component:ContactContentComponent},
  {path: 'About', component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
