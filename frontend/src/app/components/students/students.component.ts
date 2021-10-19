import { StudentsService } from './../../services/students.service';
import { Component , Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent{
  students: any;
  @Output()studentsAgeChart : number [] = [];
  @Output()studentsGenderChart : string [] = [];
  @Output()genderCount =[0,0];
  constructor(private studentService: StudentsService){
  studentService.getStudents().subscribe((stds : any) => {
    this.students = stds;
     for (const std of stds) {
       this.studentsAgeChart.push(std.age)
       this.studentsGenderChart.push(std.gender)
       if (std.gender === "M") {
         this.genderCount[0]++
       }
       if (std.gender === "F") {
        this.genderCount[1]++
      }
     } 
         
  }); 
 
}



}
