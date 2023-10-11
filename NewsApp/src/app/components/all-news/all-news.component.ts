import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/articles';
import { Location } from '@angular/common';


import { news } from 'src/app/news';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  private countryNews={
    country:""
      }
      country!:string;


  constructor(private newsService:NewsService, private location: Location) { }

  ngOnInit(): void {
    var contN={
      country:"us"
        }
    if(this.countryNews.country.length===0){
      this.getWorldNews(contN);
    }
    else{

    this.getWorldNews(this.countryNews);
  }
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

public getWorldNews(countNews:any):void{



  this.newsService.retrieveNews(countNews).subscribe(
    (response: Article[])=>{


     this.articles=response;
     console.log(this.articles)

    }
  )
}

public selecCountry():void{

console.log("====>"+this.country)
  this.countryNews.country=this.country;
this.getWorldNews(this.countryNews);

}

}



