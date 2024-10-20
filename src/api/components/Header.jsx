import {useState} from "react";

export const Header = ({search}) => {
    const [value, setValue] = useState('');
    const handleForm = event => {
        event.preventDefault();
        search(value);
    };

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <section className="card">
            <form className="card-content" onSubmit={handleForm}>
                <div className="control">
                    <label className="label" htmlFor="search">
                        What are you looking for?
                    </label>
                    <div className="control">
                        <input className="input" id="search" type="search" placeholder="Search" value={value}
                               onChange={handleChange}/>
                    </div>
                </div>
            </form>
        </section>
    );
};