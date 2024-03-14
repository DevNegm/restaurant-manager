import React from 'react'
import classes from './Table.module.scss'
import Countdown from '../utils/CountDown'
const Table = ({table,handleMakeTableAvailable}) => {

    // Function to handle evicting a table to make it available
    const handleEvict = () => {
        handleMakeTableAvailable(table.id)
        alert(table.fussMessage)
    }
    return (
        table.available ?
        <div className={classes.container}>
            <h5>Table Available</h5>
            <p>(Capacity = {table.capacity})</p>
        </div>
        : 
        <div className={classes.container}>
            <h5>Table Unavailable</h5>
            <p>Occupied By: {table.numberOfPeople}</p>
            <p className={classes.duration}>(Free in <Countdown startNumber={table.duration} onEnd={handleMakeTableAvailable} id={table.id} />) </p>
            <button onClick={handleEvict}>Evict</button>
        </div>
      )
}

export default Table