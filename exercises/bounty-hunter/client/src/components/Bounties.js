import React, { Component } from 'react'
import Bounty from './Bounty'
import BountyForm from '../components/Bountyform'
import { withBountyProvider } from '../context/BountyProvider'
class Bounties extends Component {
    constructor(){
        super()
        this.state = {
            editToggler: false
        }
    }
    componentDidMount(){
        this.props.getBounties()
    }

    editToggler = () => {
        this.setState({
            editToggler: !editToggler
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
            <BountyForm />
                {
                    this.props.bounties.map(bounty => 
                        <Bounty firstName = {bounty.firstName}
                                lastName = {bounty.lastName}
                                type = {bounty.type}
                                bountyAmount = {bounty.bountyAmount}
                                key = {bounty._id}
                                id = {bounty._id}
                                handleDelete = {this.props.handleDelete}/>
                    )
                }
            </div>
        )
    }
}

export default withBountyProvider(Bounties)