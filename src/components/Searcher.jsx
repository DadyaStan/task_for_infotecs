import React from "react"

export default class Searcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: null
        }
    }

    render() {
        return (
            <div className="searcher-box">
                <form className="searcher">
                    <input
                        className="searcher__text-field"
                        type="search" 
                        name="" 
                        id="searcher" />
                    <button
                        className="searcher__button"
                        type="submit" 
                        name="" 
                        id="searcher"
                        onClick={() =>{
                            fetch('')
                        }}>
                    </button>
                </form>
            </div>
        )
    }
}
