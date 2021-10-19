import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentsService } from './services/students.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentsComponent } from './components/students/students.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentsComponent,
    BarChartComponent,
    PieChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
