import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Student } from 'src/Student';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }) };
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient,private student:Student) { }

  getStudentsUrl="http://localhost/angularphp/displaydata.php";
  addSTudent="http://localhost/angularphp/insertRecord.php";
 editSTudent="http://localhost/angularphp/updateRecord.php";
 removeSTudent="http://localhost/angularphp/deleteRecord.php";
  getStudents():Observable<any>
  {
    return this.http.get(this.getStudentsUrl) as Observable<any>;
    //console.log(this.data);
    //return this.data;
  }


  addStudent(data:Student):Observable<any>
  {
    return this.http.post(this.addSTudent,{fname:data.fname,lname:data.lname,mark:data.mark,city:data.city},httpOptions) as Observable<any>;
  }

  editStudent(data:Student):Observable<any>
  {
    return this.http.post(this.editSTudent,{rollno:data.rollno,fname:data.fname,lname:data.lname,mark:data.mark,city:data.city},httpOptions) as Observable<any>;
  }

  removeStudent(data:Student):Observable<any>
  {
    return this.http.post(this.removeSTudent,{rollno:data.rollno},httpOptions) as Observable<any>;
  }
}
