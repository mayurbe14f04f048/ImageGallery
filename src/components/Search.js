
import React, { useState } from 'react'
import axios from 'axios'
import './Search.css'
import ImageGrid from './ImageGrid'


function Search() {
    const [images, setImages] = useState("")
    const [query, setQuery] = useState([])

    const api_key = "23220960-778879a82cee763d08bccc66e"

    const url = "https://pixabay.com/api/"

    const getImage = async () => {
        await axios.get(`${url}/?key=${api_key}&q=${query}&image_type=photo&pretty=true`).then((res) => {
            setImages(res.data.hits)
            console.log(res.data.hits)
        }).catch(err => console.log(err))
    }




    const onChangeText = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

    }
    return (
        <div>
            <input type="text" placeholder="Search for Images" value={query} onChange={onChangeText} className="input" />
            <button className="button" onClick={getImage}>Get Images</button>
            <br /><br /><br /><br />
            <ImageGrid images={images}/>


        </div>
    )
}

export default Search


