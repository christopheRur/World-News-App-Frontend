import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Articles';

import { news } from 'src/app/news';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.getWorldNews();
  }
  articles: Article[] = [];

  source!: {
    id: string;
    name?: string;
  };
  author!: string;
  title!: string;
  description?: string;
  url!: string;
  urlToImage?: string;
  publishedAt!: string;
  content?: string;

public getWorldNews():void{

  let countNews={
country:"us"
  }

  this.newsService.retrieveNews(countNews).subscribe(
    (response: Article[])=>{


     this.articles=response;
     console.log(this.articles)

    }
  )
}
}



