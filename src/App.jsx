import './App.css';

const App = () => {
    const fullName = 'Jalil Abdullayev';
    const students = 43;
    const isTrue = true;
    const date = 'date';
    const url = "https://picsum.photos/250/250";
    return (
        <>
            <h1>
                Full Name: {fullName}
            </h1>
            <p>
                Students: {students}
            </p>
            <p>
                Is True: {isTrue.toString()}
            </p>
            {isTrue ? <p>Students</p> : <p>Courses</p>}
            <input type={date}/>
            <img src={url} alt=""/>
            <div style={{width: '250px', height: '250px', backgroundColor: 'blue'}}></div>
        </>
    )
}

export default App
