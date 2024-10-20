export const Header = () => {
    return (
        <section className='card'>
            <form className='card-content'>
                <div className="control">
                    <label className="label" htmlFor='search'>
                        What are you looking for?
                    </label>
                    <div className="control">
                        <input className="input" id='search' type="search" placeholder="Search"/>
                    </div>
                </div>
            </form>
        </section>
    )
}