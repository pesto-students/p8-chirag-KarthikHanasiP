import { useState } from 'react';
import './App.css';
import Navigation from './Navigation';

const Home = () => {

    const handleClear = () => {
        setURL("");
        setShortUrl("");
    }

    const copy = () => {
        let copyText = document.querySelector(".short-url");
        copyText.select();
        document.execCommand("copy");
    }

    const handleSubmit = async () => {

        if(url.length === 0) {
            alert("Please Enter URL");
            return false;
        }

        const isValidUrl = (string) => {
            try {
              new URL(string);
              return true;
            } catch (err) {
              return false;
            }
        }

        
        let checkURL = isValidUrl(url);
        if(!checkURL) {
            alert("Please Enter Valid URL");
            return false;
        }

        await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then((response) => response.json())
            .then((data) => {
                const {result} = data;
                setShortUrl(result.full_short_link);
            });

    }
    const [url, setURL] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    return <>
        <Navigation />
        <div className='App'>
            <h1>Shorten Links</h1>
        </div>

        <div className='App'>
            <div className='shorten-url'>
                <div className='inner-shorten-url'>
                    <input type="text" className='input' onChange={(e) => {
                        setURL(e.target.value)
                    }} value={url} placeholder="Enter URL"/>

                    <button className='button' onClick={handleSubmit}>Shorten It!</button>

                    <button className='button' onClick={handleClear}>Clear!</button>
                </div>
            </div>
        </div>

        <div className='App1'>
            <div className='shorten-url'>
                <div className='inner-shorten-url'>
                    <div className='display-shorten-url'>
                        {url}
                    </div>

                    <input className='display-shorten-url short-url' value={shortUrl}/>

                    <span className='copy-link' id="copyLink" onClick={copy}>Copy</span>
                    
                </div>
            </div>
        </div>

    </>
}

export default Home;