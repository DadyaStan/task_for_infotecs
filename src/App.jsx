import React from "react";
import Table from "./components/Table";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        keyFilter: null,
        inputData: null,
        api: 'https://dummyjson.com/users'
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
                            <option value="clear">Полный список</option>
                    </select> 
                    <input
                        className="searcher__text-field"
                        type="search"
                        id="input"
                        onChange={(e) => this.setState({ inputData: e.target.value })} />
                    <div
                        className="searcher__button"
                        id="searcher"
                        onClick={() => this.setState({ api: 'https://dummyjson.com/users/filter?key=hair.color&value=Brown' })}
                        ><i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </form>
            </div>
          <Table api={this.state.api}/>
        </div>
      </div>)
    }
}

export default App