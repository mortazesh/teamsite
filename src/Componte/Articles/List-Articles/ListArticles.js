import React,{ useState,useEffect } from "react";
import axios from "axios";

import './ListArticles.css'

const ListArticles = () => {

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44351/api/Article/GetAll')
        .then((response) => {
            console.log(response)
            const { data } = response
        })
        .then((data) => {
            console.log(data)
            const { result } = data
            console.log(result)
            setArticles(result)
        })
    },[])

    return(
        <div>
            {articles.map((item) => {
                
            })}
        </div>
    )
}

export default ListArticles