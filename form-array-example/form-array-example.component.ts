import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent implements OnInit {

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }
  FormArrayExample = this._fb.group({
    staticInput : [''],
    dynamicInputGroup : this._fb.array([this.getDynamicInput()])
  })

  getDynamicInput() {
    return this._fb.group({
      dynamicInput:[]
    })
  }

  get DyamicInput() {
    return <FormArray>this.FormArrayExample.get('dynamicInputGroup')
  }

  Add(){
this.DyamicInput.push(this.getDynamicInput())
  }

  Remove(i) {
this.DyamicInput.removeAt(i)
  }

  AddFrom() {
    console.log(this.FormArrayExample.value)
  }
  Reset() {
    this.FormArrayExample.reset()
  }
}
