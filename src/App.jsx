import React, {
    useState, useEffect
} from 'react';
import './App.css'
import Snowfall from './components/SnowFall.jsx';
import axios from 'axios';
/**
 * @typedef {Object} Reto
 * @property {string} day - El día
 * @property {string} [src] - La fuente (opcional)
 */

/**
 * @typedef {Object} Adventjs
 * @property {Reto[]} retos - Los retos
 */


const App = () => {


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://api-fetcher-adventjs.vercel.app/api')
            .then((response) => {
                setPosts(response.data.retos);
            })
        return () => { }
    }, [])
    console.log()
    return <>
        <Snowfall numSnowflakes={100} />
        <main className="container">
            {posts.map((reto, i) => {
                const day = reto?.day.split('').filter(v => !isNaN(v)).join('');
                const dificulty = reto?.day.split('').filter(v => isNaN(v)).join('');
                const intl = {
                    'Easy': 'Fácil',
                    'Medium': 'Medio',
                    'Hard': 'Difícil',
                }
                const today = new Date();
                const now = today.getDate();
                return (
                    <>

                        <a href={`https://adventjs.dev/challenges/2023/${day[1]}`} target="_blank" key={day}>
                            <article className={`kata ${day == now ? 'today' : ''} ${day <= now ? 'past' : 'future'}`}  >
                                {
                                    reto.src ? <img src={reto.src} alt="" className="img-advent" /> : <div class="image-skeleton"></div>

                                }

                                {dificulty && <h2 className={`day ${dificulty.toLowerCase()}`}>{intl[dificulty]}</h2>}
                                <h1>Día {day}</h1>
                            </article>
                        </a>
                    </>
                )
            })}</main>
    </>
};






export default App;