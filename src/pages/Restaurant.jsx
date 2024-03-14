import React, { useState } from 'react'
import classes from './Restaurant.module.scss'
import Table from '../components/Table'
import Form from '../components/Form'
const Restaurant = () => {
  const [tables,setTables] = useState([
    {
      id:1,
      capacity: 1,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:2,
      capacity: 2,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:3,
      capacity: 3,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:4,
      capacity: 4,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:5,
      capacity: 5,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:6,
      capacity: 6,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:7,
      capacity: 10,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
    {
      id:8,
      capacity: 12,
      available: true,
      numberOfPeople: 0,
      duration: 0,
      fussMessage: '',
    },
  ]) 
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    numberOfPeople: '',
    duration: '',
    fussMessage: '',
  });

  // filter tables based on availability and capacity
  // sort the filtered tables based on capacity in ascending order
  const sortedTables = tables
  .filter(table => table.available && table.capacity >= formData.numberOfPeople)
  .sort((a, b) => a.capacity - b.capacity);

  // update the table with the best match
  const handleAddPeople = () => {
    if (sortedTables.length > 0) {
      // get the id of the best match table
      const bestMatchTableId = sortedTables[0].id;
      const newTables = tables.map((table) => {
        if(table.id === bestMatchTableId){
          return {
            ...table,
            available: false,
            numberOfPeople: formData.numberOfPeople,
            duration: formData.duration,
            fussMessage: formData.fussMessage,
          }
        }
        return table;
      });
      setTables(newTables);
    } else {
      alert('No table found.');
    }
    // clear the form modal and hide it
    setFormData({
      numberOfPeople: '',
      duration: '',
      fussMessage: ''
    });
    setShowForm(false);
  };

  // update the table to make it available again
  const handleMakeTableAvailable = (tableId) => {
    const updatedTables = tables.map((table) => {
      if (table.id === tableId) {
        return {
          ...table,
          available: true,
          numberOfPeople: 0,
          duration: 0,
          fussMessage: '',
        };
      }
      return table;
    });
    setTables(updatedTables);
  };

  return (
    <section className={classes.container}>
    {showForm && <Form setShowForm={setShowForm} formData={formData} setFormData={setFormData} onDone={handleAddPeople}/>}
      <header className={classes.header}>
        <h2>Restaurant</h2>
        <button onClick={() => setShowForm(true)}>
          Add People
        </button>
      </header>
        <div className={classes.tables}>
          {tables.map((table) => (<Table key={table.id} table={table} handleMakeTableAvailable={handleMakeTableAvailable}/>))}
        </div>
    </section>
  
  )
}

export default Restaurant