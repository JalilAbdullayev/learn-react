import 'bulma/css/bulma.min.css';
import './App.css';
import {Course} from "./Course.jsx";
import Angular from '../public/images/channels4_profile.jpg';
import Bootstrap from '../public/images/Bootstrap_logo.svg.png';
import FullStack from '../public/images/Link Sharing-Foundation Full Stack Web Development.jpg';
import FrontEnd from '../public/images/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social.png';
import {useState} from "react";

const App = () => {
    const [courses, setCourses] = useState([]);
    const handleClick = () => {
        setCourses([...courses, getRandomCourse()]);
    }
    const getRandomCourse = () => {
        const coursesArr = [{
            title: 'Angular',
            description: 'Angular is an open source web application framework created by Google and maintained by the Angular Team.',
            image: Angular
        }, {
            title: 'Bootstrap',
            description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first websites.',
            image: Bootstrap
        }, {
            title: 'Full Stack',
            description: 'Full Stack Development is the process of building a web application using the front end and back end of the application',
            image: FullStack
        }, {
            title: 'Front End',
            description: 'Front End Development is the process of building a web application using the front end of the application',
            image: FrontEnd
        }];
        return coursesArr[Math.floor(Math.random() * coursesArr.length)];
    }

    return (
        <main className='is-display-flex is-flex-direction-column is-justify-content-center is-align-items-center my-6'>
            <button onClick={handleClick} className='button is-link'>
                Add Course
            </button>
            <div className='columns container section is-multiline'>
                {courses.map((course, index) => {
                    return <Course title={course.title} image={course.image} description={course.description}
                                   key={index}/>
                })}
            </div>
        </main>
    )
}

export default App
