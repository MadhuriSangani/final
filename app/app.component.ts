import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Subscriber } from 'rxjs';
import { Student } from 'src/Student';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang6';
students:any;
result:string='';
msg:string='';
mystyle="color:red;font-weight:bold;text-align:center;font-size:30px;";
constructor(private studentService:StudentService,public student:Student){}

  ngOnInit(){
    this.students=null;
    this.result='';
    this.msg='';
    this.displayStudents();
    
  }

  displayStudents()
  {
    (this.studentService.getStudents()).subscribe(res => this.students=res);
  }

insertStudent()
{
  this.studentService.addStudent(this.student).subscribe(res => {
    this.result=res['msg'];
    if(this.result=='inserted')
  {
  this.displayStudents();
  this.msg="Data Inserted Sucecssfully";
  }
  else if(this.result=='not inserted')
  {
    this.msg="Data Not Inserted";
  }
  });
  
}


updateStudent()
{
  this.studentService.editStudent(this.student).subscribe(res => {
    this.result=res['msg'];
    if(this.result=='updated')
    {
    this.displayStudents();
    this.msg="Data Updated Sucecssfully";
    }
    else if(this.result=='not updated')
    {
      this.msg="Data Not Updated";
    }
  });
  
}
 

deleteStudent()
{
  this.studentService.removeStudent(this.student).subscribe(res => {
    this.result=res['msg'];
    if(this.result=='deleted')
  {
  this.displayStudents();
  this.msg="Data Deleted Sucecssfully";
  }
  else if(this.result=='not deleted')
  {
    this.msg="Data Not Deleted";
  }
});
  
}
}
