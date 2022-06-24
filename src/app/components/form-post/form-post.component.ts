import { Component, OnInit } from '@angular/core';
import {CannotConatinSpace} from "./form.validator";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {
  form = new FormGroup({
    titleInput:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      CannotConatinSpace.shouldChange
    ]),
   
   });
  constructor() { }

  ngOnInit(): void {
  }
  addArticle(e:any){
    e.preventDefault();
  }
}
