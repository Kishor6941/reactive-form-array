import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms'
@Component({
  selector: 'app-crud-angular',
  templateUrl: './crud-angular.component.html',
  styleUrls: ['./crud-angular.component.css']
})
export class CrudAngularComponent implements OnInit {
  searchName : string = '';
  // CrudAngularForm : FormGroup;
  age : String[] = ['Choose...',"10", "20", "30"];
  CopyData = [];
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
}

CrudAngularForm = this.fb.group({
  Name : ['',Validators.required],
  Age : [null,Validators.required],
  gender :['',Validators.required],
  checkInfo : ['',Validators.required],
  HobbiesList: this.fb.array([this.getHobbiesFiled()])

})

getHobbiesFiled() {
  return this.fb.group({
    hobbyField : ['',Validators.required]
  })
}
get DynamicAddHobbies() {
  return <FormArray>this.CrudAngularForm.get('HobbiesList')
}
addHobby() {
  this.DynamicAddHobbies.push(this.getHobbiesFiled())
}
Add(){
  if(this.CrudAngularForm.value) {
    this.CopyData.push(this.CrudAngularForm.value)
  }
  
}
removeHobby(i){
this.DynamicAddHobbies.removeAt(i)
}
remove(i) {
   this.CopyData.splice(i,1)
  // this.CopyData.splice(0,this.CopyData.length) // To Delete whole array
}
Reset() {
  this.CrudAngularForm.reset()
}
}
