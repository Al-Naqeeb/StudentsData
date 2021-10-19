import { StudentsService } from './../../services/students.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {
student =
{
  name: "",
  age: null,
  gender: '',
}
  constructor(private studentService: StudentsService, private router : Router) { }

 submit(){
  this.studentService.addStudent(this.student);
  this.router.navigate(['/'])

 }

}
