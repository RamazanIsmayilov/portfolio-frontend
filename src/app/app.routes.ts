import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ServicesComponent } from './features/services/services.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ResumeComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManageEducationComponent } from './admin/manage-education/manage-education.component';
import { ManageExperienceComponent } from './admin/manage-experience/manage-experience.component';
import { ManageSkillsComponent } from './admin/manage-skills/manage-skills.component';
import { ManageProjectsComponent } from './admin/manage-projects/manage-projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'education', pathMatch: 'full' },
            { path: 'education', component: ManageEducationComponent },
            { path: 'experience', component: ManageExperienceComponent },
            { path: 'projects', component: ManageProjectsComponent },
            { path: 'skills', component: ManageSkillsComponent },
        ]
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
