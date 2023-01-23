import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { CourseInclusionComponent } from "./components/course-inclusion/course-inclusion.component";
import { SearchCourseComponent } from "./components/search-course/search-course.component";


const routes: Routes = [
    { path: '', component: SearchCourseComponent},
    { path: 'incluir', component: CourseInclusionComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}