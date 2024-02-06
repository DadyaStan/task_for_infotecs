// import React from "react"

// export default class Searcher extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputData: null,
//             filteredData: null,
//             keyFilter: null,
//         }

//         this.keyFilter = null,
//         this.inputData = null
//     }

//     renderFilteredTable() {
//         console.log(this.state.keyFilter, + ' ' + this.state.inputData)
//     }

//     render() {
//         return (
//             <div className="searcher-box">
//                 <form className="searcher">
//                     <select 
//                         className="searcher__select" 
//                         placeholder="Категория фильтра" 
//                         name="subject" 
//                         id="subject_input" 
//                         onChange={(e) => this.setState({ keyFilter: e.target.value })}
//                         required>
//                             <option disabled hidden selected>Фильтр по колонке</option>
//                             <option value="lastName">Фамилия</option>
//                             <option value="firstName">Имя</option>
//                             <option value="maidenName">Отчество</option>
//                             <option value="age">Возраст</option>
//                             <option value="gender">Пол</option>
//                             <option value="phone">Номер телефона</option>
//                             <option value="address.city">город</option>
//                             <option value="address.address">Адрес</option>
//                             <option value="clear">Полный список</option>
//                     </select>
//                     <input
//                         className="searcher__text-field"
//                         type="search"
//                         id="input"
//                         onChange={this.inputData = e.target.value } />
//                     <div
//                         className="searcher__button"
//                         id="searcher"
//                         onClick={this.renderFilteredTable}
//                         ><i class="fa-solid fa-magnifying-glass"></i>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
