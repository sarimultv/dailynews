import React from 'react'
import './Countryname.css'

export class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
          articles: [],
          isLoaded: false,
        }
      }
    // componentDidMount(){
    //     fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf9dce39ff4748cfa8e2a1e3265f04d6")
    //     .then((res)=> res.json())
    //     .then((result)=>{
    //       this.setState({
    //         isLoaded: true,
    //         articles: result.news
    //       })
    //     })
    // }
    render(){
      const {isLoaded,articles}= this.state;
      const auth= articles.map((item)=>{
       return <p>{item.author}</p>
    })
    if(!isLoaded){
    return <div>Loading....</div>
     } 
     else{
    return <div>
      <h4>See Author of Today's News</h4>
      {auth}
    </div>
  }
}
}