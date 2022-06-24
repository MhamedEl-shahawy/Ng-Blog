import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<[Article]|any>{
      return this.http.get(environment.url);      
  }
  getArticleDetails(id:string):Observable<[Article]|any>{
    return this.http.get(environment.url,{
      params: new HttpParams()
      .set('id', id)
    })
  }
  getArticleDetailsTitle(title:string):Observable<[Article]|any>{
    return this.http.get(environment.url,{
      params: new HttpParams()
      .set('title', title)
    })
  }
}
