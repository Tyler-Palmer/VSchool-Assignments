import React, { Component, Fragment } from 'react'
import { withUglyThings } from './UglyThingsProvider'
// import UglyThingsProvider from './UglyThingsProvider'

class UglyThing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            imgUrl: '',
            isEditing: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newUgly = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(this.props._id, newUgly)
        this.editToggler()
    }

    editToggler = () => {
        this.setState(prevState => {
            return {
                isEditing: !prevState.isEditing
            }
        })
    }

    render() {
        return (
            <Fragment>
            { this.state.isEditing ?
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            name="title"
                            placeholder={this.props.title}
                            required>
                        </input>
                        <input type="text"
                            value={this.state.description}
                            onChange={this.handleChange}
                            name="description"
                            placeholder={this.props.description}
                            required>
                        </input>
                        <input type="text"
                            value={this.state.imgUrl}
                            onChange={this.handleChange}
                            name="imgUrl"
                            placeholder={this.props.imgUrl}
                            required>
                        </input>
                        <button>Submit Edit</button>
                    </form>
                    <button onClick={this.editToggler}>Close</button>
                </div>
                :
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <img src={this.props.imgUrl} alt="An ugly thing"></img>
                    <button onClick={this.editToggler}>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props._id)}>Delete</button>
                </div>
            }
            </Fragment>
        )
    }
}

export default withUglyThings(UglyThing)