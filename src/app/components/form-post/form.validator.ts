import { ArticlesService } from './../../services/articles.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { AsyncValidatorFn } from "@angular/forms";
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
export function shouldChange(val:Article|any): ValidatorFn {
 
        return (control: AbstractControl): ValidationErrors | null => {
             if(val?.filter((element:any) => element.title == control.value ).length){
                return {shouldChange:true};
             }
          
          return null;
          
        }
       
      }
 
    // static shouldChange(control:AbstractControl,article:ArticlesService):ValidationErrors|null{
    //     setTimeout(()=>{
    //     if(control.value as string ){
    //         article.getArticleDetailsTitle(control.value).subscribe((res):any=>{
    //            if(res.length){
    //             return {shouldChange:true};
    //            } 
    //         });   
    //         return null; 
    //     } 
    // },5000)
    // }
    // static shouldChange(controls:AbstractControl,data:any):ValidationErrors|null{
       
    //    return {shouldChange:true};  
    //     return null;
    // }

