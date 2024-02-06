import React from "react";
import User from "./User";


export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        }

        this.api = props.api
    }

    componentDidMount() {
        fetch(this.api)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    users: result.users
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return  <div className="table">
                        <h2 className="table-message">ERROR: {error.message}</h2>
                    </div>
        } else if (!isLoaded) {
            return  <div className="table">
                        <h2 className="table-message">Loading...</h2>
                    </div>
        } else {
            return <div className="table">
                <div className="table__types">
                    <div className="table-type table-split">ФИО</div>
                    <div className="table-type table-split">Возраст</div>
                    <div className="table-type table-split">Пол</div>
                    <div className="table-type table-split">Номер Телефона</div>
                    <div className="table-type table-split">Адрес</div>
                    <div className="table-type table-split">Доп</div>
                </div>
                
                <div className="table__data">
                    {this.state.users.map((user) => (
                        <User key={user.id} user={user} />
                    ))}
                </div>
            </div>
        }
    }
}