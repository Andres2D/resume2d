import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/pages/resume/resume.component';
import { PresentationComponent } from './resume/components/presentation/presentation.component';
import { ExperienceComponent } from './resume/components/experience/experience.component';
import { SkillsComponent } from './resume/components/skills/skills.component';
import { ProjectsComponent } from './resume/components/projects/projects.component';
import { InfoComponent } from './resume/components/info/info.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IntroComponent } from './resume/components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PresentationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    InfoComponent,
    FooterComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
