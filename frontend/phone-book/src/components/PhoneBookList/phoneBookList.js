import React, { Component } from 'react'
import { connect } from 'react-redux'
import './phoneBookList.css'
import { FaPlusCircle } from 'react-icons/fa'
import PhoneBookListItem from '../PhoneBookListItem/phoneBookListItem'
import { getContacts } from '../../actions/contacts'

class PhoneBookList extends Component {
    componentDidMount() {
        this.props.GetContacts()
    }

    render() {
        return (
            <div>
                <div className="phone-book-list-header">
                    <h1 className="phone-book-list-title">Contacts</h1>
                </div>
                <div className='phone-book-list no-select'>
                {
                    
                    this.props.contacts && this.props.contacts.length && this.props.contacts.map(contact => (
                        <PhoneBookListItem key={contact.Id} contact={contact} />                        
                    ))
                }
                </div>
                <div className="phone-book-add-holder clickable">
                    <FaPlusCircle size={100}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetContacts: () => dispatch(getContacts()),
    }
}

const mapStateToProps = ({contacts}) => ({
    contacts: contacts
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneBookList)