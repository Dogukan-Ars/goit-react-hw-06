
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'


function App() {


  return (
    <div className="app">
      <h1>📱 İletişim Kitabı</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App