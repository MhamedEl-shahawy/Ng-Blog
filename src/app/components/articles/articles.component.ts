import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
   articlesData?:[Article];
  constructor(private articles:ArticlesService) { }

  ngOnInit(): void {
    this.getArticles()
  }
   private getArticles(){
      this.articles.getAllPosts().subscribe((res)=>{
        this.articlesData = res;
         
      })
   }
}
