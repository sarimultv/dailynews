import React from 'react';
import './Countryname.css';

export class Countryname extends React.Component{
    constructor(props){
        super(props);
        this.state={
            country: [{fullName:"INDIA",
                        shortName:"in"},
                        {fullName:"USA",
                        shortName:"us"},
                        {fullName:"China",
                        shortName:"ch"},
                        {fullName:"RUSSIA",
                        shortName:"ru"},
            ],
            articles: []
        }
    }
    array=()=>{
        this.setState({
            country: [...this.state.country]
        })
    }
    news=(e)=>{
        const code= e.target.getAttribute("code");
       // console.log(index);
        // const V
        // if(index===0){
        //     return V="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf9dce39ff4748cfa8e2a1e3265f04d6"
        // }
        fetch(`https://newsapi.org/v2/top-headlines?country=${code}&category=business&apiKey=cf9dce39ff4748cfa8e2a1e3265f04d6`)
        .then((response)=> response.json())
            .then((response)=>{
            // console.log(response)
                this.setState({
                    articles: response.articles
                });
            });
    }

    render(){
        const newsi= this.state.articles.map(
            (article)=>{
                return <div  className="news"><h2 className="para">{article.title}</h2>
                       <figure><img className="img" src={article.urlToImage} alt="NewsPicture Not Available"/></figure>
                       </div>
        })

        const Cname = this.state.country.map(
            (item,i) => { 
                return <button onClick={this.news} code={item.shortName}>{item.fullName}</button>
        })
        return(
            <div><center>
            {Cname} 
            </center><br /><br />
            <div> {newsi}</div>
           
            </div>
        )
    }
}
