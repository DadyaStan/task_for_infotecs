import React from "react";
import User from "./components/User";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      keyFilter: '',
      inputData: '',
      users: [],
      api: 'https://dummyjson.com/users'
    }

  }

  fullTableLink = 'https://dummyjson.com/users'

  componentDidMount() {
    fetch(this.state.api)
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

  updateTable(filterLink, valueLink) {
    if (!this.state.keyFilter || !this.state.inputData) {
      this.state.api = this.fullTableLink
    } else if (this.state.keyFilter === 'reset') {
      this.state.api = this.fullTableLink
      this.componentDidMount()
    } else {
      fetch(filterLink + this.state.keyFilter + valueLink + this.state.inputData)
        .then(res => res.json())
        .then(
          (result, error) => {
            if (result.total = 0) {
              this.setState({
                isLoaded: true,
                error
              })
            } else {
              this.setState({
                isLoaded: true,
                users: result.users
              })
            }
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
    }
  }



  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="searcher-box">
            <form className="searcher">
              <select
                className="searcher__select"
                placeholder="Категория фильтра"
                name="subject"
                id="subject_input"
                onChange={(e) => this.setState({ keyFilter: e.target.value })}
                required>
                <option disabled hidden selected>Фильтр по колонке</option>
                <option value="lastName">Фамилия</option>
                <option value="firstName">Имя</option>
                <option value="maidenName">Отчество</option>
                <option value="age">Возраст</option>
                <option value="gender">Пол</option>
                <option value="phone">Номер телефона</option>
                <option value="address.city">город</option>
                <option value="address.address">Адрес</option>
                <option value="reset">Полный список</option>
              </select>
              <input
                className="searcher__text-field"
                type="search"
                id="input"
                onChange={(e) => this.setState({ inputData: e.target.value })} />
              <div
                className="searcher__button"
                id="searcher"
                onClick={() => this.updateTable('https://dummyjson.com/users/filter?key=', '&value=')}
              ><i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
          <div className="table">
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
        </div>
      </div>)
  }
}

export default App