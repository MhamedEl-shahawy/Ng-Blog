import { Article } from 'src/app/models/article.model';
import { Component, Input, OnInit } from '@angular/core';
import {shouldChange} from "./form.validator";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {
  @Input() articleData?:any;
  form:any;
  constructor() { }

  ngOnInit(): void {
    
  }
  addArticle(e:any){
    e.preventDefault();
    console.log(this.articleData)

  }
  ngOnChanges(){
    this.form = new FormGroup({
      titleInput:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        shouldChange(this.articleData)
      ]),
     
     });

  }
}
