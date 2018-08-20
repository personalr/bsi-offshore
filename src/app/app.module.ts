import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavelementComponent } from './navelement/navelement.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from "app/projects/projects.component";
import { HseqComponent } from "app/hseq/hseq.component";
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";
import { ReferenceprojectsComponent } from './referenceprojects/referenceprojects.component';
import { ProjectComponent } from "app/project/project.component";
import { BildefremviserComponent } from './bildefremviser/bildefremviser.component';
import { TurnkeyComponent } from './turnkey/turnkey.component';
import { PlanningComponent } from './planning/planning.component';



const appRoutes: Routes=[
  { path: '',component: HomeComponent },
  { path: 'products',component: ProductsComponent },
  { path: 'services',component: ServicesComponent },
  { path: 'projects',component: ProjectsComponent },
  { path: 'projects',component: ProjectsComponent },
  { path: 'hseq',component: HseqComponent },
  { path: 'about',component: AboutComponent },
  { path: 'contact',component: ContactComponent},
  { path: 'project',component: ProjectComponent },
  { path: 'project/:id',component: ProjectComponent },
  { path: 'planning',component: PlanningComponent },
  { path: 'turnkey',component: TurnkeyComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavelementComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ServicesComponent,
    ProjectsComponent,
    HseqComponent,
    AboutComponent,
    ContactComponent,
    ReferenceprojectsComponent,
    ProjectComponent,
    BildefremviserComponent,
    TurnkeyComponent,
    PlanningComponent,
  
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
