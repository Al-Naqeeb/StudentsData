import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url = "http://localhost:5000/students"
  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.url).pipe(take(1));
  }
  addStudent(student:any){
    console.log(student)
    return this.http.post(this.url,student).subscribe().unsubscribe();
  }
}
