export default function Navbar({ links }) {
    return (
        <nav>
          <ul>
            <li>
                {links.map((link) => link)}
            </li>
          </ul>  
        </nav>
    )
}
