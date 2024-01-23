import { Link } from 'react-router-dom'
import Navbar from './UI/Navbar'

export default function Nav() {
    return (
        <Navbar links={[
            <Link key={1} to="/">About Me</Link>
            <Link key={2} to="/projects">Projects</Link>
            <Link key={3} to="/contact">Contact Me</Link>
            ]}
        />
    )
}
