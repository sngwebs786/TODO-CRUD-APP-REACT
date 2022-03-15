import React, { useState } from 'react'
import MyTodo from './MyTodo'

const Todo = () => {


    const [text, setText] = useState("")
    const [list, setList] = useState([])
    const [editValue, setEditValue] = useState(null)

    function addItem() {
        setList([...list, text])
        setText("")
    }

    function deleteItem(id) {
        const updatedItems = list.filter((element, index) => {
            return index !== id;
        })
        setList(updatedItems);
    }

    function deleteAll() {
        setList([])
        console.log("Chal rha h")
    }

    function editItem(id) {
        console.log(id)
        let newaValue = prompt("Enter new value")
        list.replace("sasa","newaValue")
        setList(list)
    }
    return (
        <div>
            <MyTodo deleteAll={deleteAll} addItem={addItem} deleteItem={deleteItem} editItem={editItem} text={text} setText={setText} list={list} setList={setList} />

        </div>
    )
}

export default Todo
