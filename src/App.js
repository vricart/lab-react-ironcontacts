import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React, { useState } from 'react';




function App() {
  
  const contactsListShort = contacts.slice(0, 5)
  const contactsListRest = contacts.slice(5)

  const [contactsList, setContactList] = useState(contactsListShort)

  
  const randomContactHandler = () => {
    let randomContact = contactsListRest[Math.floor(Math.random() * contactsListRest.length)]
    let newContactsArr = [...contactsList] 

    newContactsArr.unshift(randomContact)

    setContactList(newContactsArr)
  }


  const popularityHandler = () => {
    let sortByPopularity = [...contactsList].sort((a,b) => {
      return b.popularity - a.popularity;
    })

    setContactList(sortByPopularity)
  }


  const nameHandler = () => {
    let sortByName = [...contactsList].sort((a,b) => {
      return a.name.localeCompare(b.name);
    })

    setContactList(sortByName)
  }


  const deleteHandler = () => {

    setContactList()
  }





  return (
    <div className="App">

    <h1>IronContacts</h1>

    <div>
      <button onClick={randomContactHandler}>Add Random Contact</button>
      <button onClick={popularityHandler}>Sort by Popularity</button>
      <button onClick={nameHandler}>Sort by Name</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      
      <tbody>
        { contactsList.map (contact => {
          return (
            <tr>
              <td><img className="img-celebrity" src={contact.pictureUrl} alt="celebrity img"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar && <td>🏆</td> }
              {contact.wonEmmy && <td>🏆</td> }
              <td><button>Delete</button></td>
            </tr>
          )
        })}
      </tbody>

    </table>

    </div>
  );
}

export default App;
