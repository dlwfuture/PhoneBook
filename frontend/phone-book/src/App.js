import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import 'animate.css/animate.min.css'
import PhoneBookList from './components/PhoneBookList/phoneBookList'
import ContactView from './components/ContactView/contactView'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={PhoneBookList} />
            <Route exact path='/edit/contact/:contactId' component={PhoneBookList} />
            <Route exact path='/contact/:contactId' component={ContactView} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App