import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>𝐇𝐨𝐭 𝐅𝐚𝐯𝐨𝐫𝐢𝐭𝐞</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>𝐇𝐢𝐠𝐡𝐥𝐲 𝐑𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐞𝐝</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>𝐍𝐞𝐰 𝐀𝐫𝐫𝐢𝐯𝐚𝐥</span></Link>
            </div>
        </div>
    )
}

export default Header