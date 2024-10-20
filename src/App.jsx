import 'bulma/css/bulma.min.css';
import './App.css';
import {Course} from "./Course.jsx";
import Angular from '../public/images/channels4_profile.jpg';
import Bootstrap from '../public/images/Bootstrap_logo.svg.png';
import FullStack from '../public/images/Link Sharing-Foundation Full Stack Web Development.jpg';
import FrontEnd from '../public/images/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social.png';

const App = () => {
    return (
        <>
            <section className="hero is-link">
                <div className="hero-body">
                    <p className="title">
                        My courses
                    </p>
                </div>
            </section>
            <div className='columns container section'>
                <Course title='Angular' image={Angular} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            cupiditate dicta dolore, eius eligendi eveniet fugit illum labore mollitia odio perferendis praesentium
            reprehenderit, repudiandae rerum sit soluta tempore. Ex, rerum?'/>
                <Course title='Bootstrap 5' image={Bootstrap} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            cupiditate dicta dolore, eius eligendi eveniet fugit illum labore mollitia odio perferendis praesentium
            reprehenderit, repudiandae rerum sit soluta tempore. Ex, rerum?'/>
                <Course title='Full Stack' image={FullStack} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            cupiditate dicta dolore, eius eligendi eveniet fugit illum labore mollitia odio perferendis praesentium
            reprehenderit, repudiandae rerum sit soluta tempore. Ex, rerum?'/>
                <Course title='Front-end' image={FrontEnd} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            cupiditate dicta dolore, eius eligendi eveniet fugit illum labore mollitia odio perferendis praesentium
            reprehenderit, repudiandae rerum sit soluta tempore. Ex, rerum?'/>
            </div>
        </>
    )
}

export default App
