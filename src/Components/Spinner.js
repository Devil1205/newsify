import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center my-4">
                <div className="spinner-border text-primary" role="status">
                </div>
                <span>Loading...</span>
            </div>
        )
    }
}

export default Spinner