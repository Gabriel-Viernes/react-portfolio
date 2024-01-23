import { Link } from 'react-router-dom'
// project {
//  projectLink:"",
//  imgSrc:"",
//  alt:"",
//}

export default function Project({ projects }) {
    return (
        <div className='img-small-container'>
        {projects.map((project) => project)}
        </div>
    )
}
