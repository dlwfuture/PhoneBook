import React, { Component } from 'react'
import './phoneBookListItem.css'
import { getInitials } from '../../utils/helpers'

class PhoneBookListItem extends Component {
    state = {
        contact: {}
    }

    componentDidMount() {
        const { contact } = this.props

        if (contact && contact.Id !== this.state.contact.Id) {
            this.setState({
                contact: contact
            })
        }
    }

    render() {
        return (
            <div className="phone-book-item clickable" href="~">
                <div className="phone-book-badge">
                    {
                        this.state.contact && 
                        this.state.contact.Name && 
                        getInitials(this.state.contact.Name)}
                </div>
                <p>{this.state.contact && this.state.contact.Name}</p>
                <p className='phone-book-item-phone'>{this.state.contact && this.state.contact.Phone}</p>
            </div>
        )
    }
}

export default PhoneBookListItem