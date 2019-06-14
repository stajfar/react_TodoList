import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items, handleClearList, handleDelete, handleEdit}= this.props;
        return (
            <ul className="list-group">
                <h3 className="text-capitalize text-center">to do items</h3>
                {items.map(item => {
                    return(
                        <TodoItem key={item.id} title={item.title} 
                        handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)}></TodoItem>
                    )
                }

                )}
                
                <button type="button" className="btn btn-block btn-danger text-capitalize" onClick={handleClearList}>clear list</button>
            </ul>
        )
    }
}
