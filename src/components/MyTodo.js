import React from 'react'
import Todo from './Todo'
import { TextField } from '@mui/material'
import add from '../img/add.png';
import deleteicon from '../img/delete.png';
import '../App.css';

const MyTodo = (props) => {
    return (
        <div className="main-div">
                <h1>My React Todo </h1>
                <center>
                <div className="inputs-and-buttons">
                    <TextField onChange={(e) => props.setText(e.target.value)} value={props.text} className="input-field" id="standard-basic" label="Enter your todo . . ." variant="standard" />
                    <span className="btn-div">
                    <button className="add-btn" onClick={props.addItem}><img src={add}></img></button>
                    <button className="delete-btn" onClick={props.deleteAll}><img src={deleteicon}></img></button>
                    </span>
                </div>
                </center>
                <ul className="todoList">
                    {props.list.map((items, index) => {
                        return (
                            <li key={index} > {items}
                                <button onClick={() => props.deleteItem(index)}>Delete</button>
                                <button onClick={() => props.editItem(index)}>Edit</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
}

export default MyTodo
