import Project from '../components/Project';
import { Link } from 'react-router-dom'
let projects = [
    <div>
        <Link key={1} to="https://gabriel-viernes.github.io/Pootis-Button">
            <img src="src/assets/img/pootis button.png" alt="Screenshot of Pootis Button website"></img>
        </Link>
        <Link key={2} to="https://github.com/Gabriel-Viernes/Pootis-Button">
            <h3>Pootis Button</h3>
        </Link>
    </div>,
    <div>
        <Link key={3} to="https://online-text-editor-bootcamp-9d76a4fd67d9.herokuapp.com/">
            <img src="src/assets/img/jate.png" alt="Screenshot of Just Another Text Editor"></img>
        </Link>
        <Link key={4} to="https://github.com/Gabriel-Viernes/online-text-editor">
            <h3>JATE</h3>
        </Link>
    </div>,
    <div>
        <Link key={5} to="https://joosbox-9e68743f6da7.herokuapp.com/login">
            <img src="src/assets/img/juicebox.png" alt="Screenshot of Juicebox"></img>
        </Link>
        <Link key={6} to="https://github.com/Gabriel-Viernes/project-2">
            <h3>Juicebox</h3>
        </Link>
    </div>,
    <div>
        <Link key={7} to="https://gabriel-viernes.github.io/Horiseon/">
            <img src="src/assets/img/horiseon thumbnail.png" alt="Screenshot of Horiseon website"></img>
        </Link>
        <Link key={8} to="https://github.com/Gabriel-Viernes/Horiseon">
            <h3>First Look Movies</h3>
        </Link>
    </div>,
    <div>
        <Link key={9} to="https://gabriel-viernes.github.io/first-look-movies/">
            <img src="src/assets/img/first-look.png" alt="Screenshot of First Look Movies"></img>
        </Link>
        <Link key={8} to="https://github.com/Gabriel-Viernes/first-look-movies">
            <h3>First Look Movies</h3>
        </Link>
    </div>,
    <div>
        <Link key={10} to="https://gabriel-viernes.github.io/five-day-forecast/">
            <img src="src/assets/img/five.png" alt="Screenshot of Five Day Forecast"></img>
        </Link>
        <Link key={11} to="https://github.com/Gabriel-Viernes/five-day-forecast">
            <h3>Five Day Forecast</h3>
        </Link>
    </div>
]

export default function RecentPage() {
    return (
        <section className = "recent-work" useid="recent-work">
            <h2>recent work</h2>
            <Project projects={projects} />
        </section>

    )
}

