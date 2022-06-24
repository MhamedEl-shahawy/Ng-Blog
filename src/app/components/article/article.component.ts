import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData?:[Article];
  articleId:string= "";
  constructor(
    private article:ArticlesService,
    private activatedRoute: ActivatedRoute,
    ) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.articleId = params['id'];
      this.getArticleDetails(this.articleId);
    });
  }
  getArticleDetails(id: string): void {
     this.article
      .getArticleDetails(id)
      .subscribe((articleResp: [Article]) => {
        this.articleData = articleResp;
        console.log(articleResp)
      });
  }
}
