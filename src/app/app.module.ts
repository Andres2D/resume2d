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
import { AboutMeComponent } from './resume/components/about-me/about-me.component';
import { ThemeControlComponent } from './shared/theme-control/theme-control.component';

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
    AboutMeComponent,
    ThemeControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
