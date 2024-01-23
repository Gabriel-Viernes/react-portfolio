import Project from '../components/Project';
import { Link } from 'react-router-dom'
let projects = [
    <div className="project-card">
        <Link className="img-back" key={1} to="https://gabriel-viernes.github.io/Pootis-Button">
            <img src="/pootis button.png" alt="Screenshot of Pootis Button website"></img>
        </Link>
        <Link className="github" key={2} to="https://github.com/Gabriel-Viernes/Pootis-Button">
            Pootis Button
        </Link>
    </div>,
    <div className="project-card">
        <Link className="img-back" key={3} to="https://online-text-editor-bootcamp-9d76a4fd67d9.herokuapp.com/">
            <img src="/jate.png" alt="Screenshot of Just Another Text Editor"></img>
        </Link>
        <Link className="github" key={4} to="https://github.com/Gabriel-Viernes/online-text-editor">
            JATE
        </Link>
    </div>,
    <div className="project-card">
        <Link className="img-back" key={5} to="https://joosbox-9e68743f6da7.herokuapp.com/login">
            <img src="/juicebox.png" alt="Screenshot of Juicebox"></img>
        </Link>
        <Link className="github" key={6} to="https://github.com/Gabriel-Viernes/project-2">
            Juicebox
        </Link>
    </div>,
    <div className="project-card">
        <Link className="img-back" key={7} to="https://gabriel-viernes.github.io/Horiseon/">
            <img src="/horiseon thumbnail.png" alt="Screenshot of Horiseon website"></img>
        </Link>
        <Link className="github" key={8} to="https://github.com/Gabriel-Viernes/Horiseon">
            Horiseon
        </Link>
    </div>,
    <div className="project-card">
        <Link className="img-back" key={9} to="https://gabriel-viernes.github.io/first-look-movies/">
            <img src="/first-look.png" alt="Screenshot of First Look Movies"></img>
        </Link>
        <Link className="github" key={10} to="https://github.com/Gabriel-Viernes/first-look-movies">
            First Look Movies
        </Link>
    </div>,
    <div className="project-card">
        <Link className="img-back" key={11} to="https://gabriel-viernes.github.io/five-day-forecast/">
            <img src="/five.png" alt="Screenshot of Five Day Forecast"></img>
        </Link>
        <Link className="github" key={12} to="https://github.com/Gabriel-Viernes/five-day-forecast">
            Five Day Forecast
        </Link>
    </div>
]

export default function RecentPage() {
    return (
        <section className = "recent-work" >
            <h2>recent work</h2>
                <Project  projects={projects} />
        </section>

    )
}

