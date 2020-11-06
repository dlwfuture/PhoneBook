import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './phoneBookListItem.css'
import { getInitials } from '../../utils/helpers'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

    goToContact(contactId, event) {
        event.stopPropagation()
        this.props.history.push(`/contact/${contactId}`)
    }

    render() {
        const { contact } = this.state
        return contact && (
            <Card className="phone-book-card">
                <CardContent onClick={(event) => this.goToContact(contact.Id, event)}>
                    <div className="phone-book-badge">
                        {
                            contact.Name && 
                            getInitials(contact.Name)
                        }
                    </div>
                    <Typography>
                        {contact.Name}
                    </Typography>
                    <Typography>
                        {contact.Phone}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withRouter(PhoneBookListItem)