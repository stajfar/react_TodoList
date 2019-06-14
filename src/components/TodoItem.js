import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit}= this.props
        return (
            <li className="list-group-item d-flex justify-content-between">
                <h6 className="text-capitalize">{title}</h6>
                <div className="todoClass">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger btn" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>                
            </li>
        )
    }
}
