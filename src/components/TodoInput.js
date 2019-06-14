import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {handlechange, title, handleSubmit, editItemMode}= this.props;
        return (            
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" onChange={handlechange} value={title} className="form-control text-capitalize" placeholder="Add a todo item"></input>
                    </div>
                    <button type="submit" 
                        className={editItemMode ? "btn btn-success btn-block mt-3" : "btn btn-primary btn-block mt-3"}>
                        {editItemMode ? "Edit Item" : "Add Item" }
                    </button>                    
                </form>
            </div>
        )
    }
}
