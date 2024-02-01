import React from "react"

export default class User extends React.Component {
    user = this.props.user

    render() {
        return (
            <div className="table__row">
                <div className="table-cell table-split">{this.user.lastName} {this.user.firstName} {this.user.maidenName}</div>
                <div className="table-cell table-split">{this.user.age}</div>
                <div className="table-cell table-split">{this.user.gender}</div>
                <div className="table-cell table-split">{this.user.phone}</div>
                <div className="table-cell table-split">{this.user.address.city} {this.user.address.address}</div>
                <div className="table-cell table-split"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
        )
    }
}