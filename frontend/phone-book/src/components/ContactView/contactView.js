import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetContact } from '../../actions/contacts'

class ContactView extends Component {
    componentDidMount(){
        this.props.GetContact(this.props.match.params.contactId)
    }

    render() {
        const { contact } = this.props
        return contact && (
            <div>
                {contact.Name}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetContact: (contactId) => dispatch(GetContact(contactId))
    }
}

const mapStateToProps = ({contact}) => ({
    contact: contact
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ContactView)