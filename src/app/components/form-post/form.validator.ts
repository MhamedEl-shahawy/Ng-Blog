import { ArticlesService } from './../../services/articles.service';
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { AsyncValidatorFn } from "@angular/forms";
import { Observable } from 'rxjs';
export class CannotConatinSpace{

 
    static shouldChange(article:ArticlesService):AsyncValidatorFn{
        return (control:AbstractControl): Observable<ValidationErrors> =>{
             article.getArticleDetailsTitle(control.value).subscribe((res)=>{
              return   (res.length > 0)?{shouldChange:true}:null;
            })   
        };
    }


}