import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'

function ContactShow(props){
        const id= props.match.params.id
        // const {name,email,phone} = props.contact
        return(
            <div className="container mt-5">
                {
                     !_.isEmpty(props.contact) &&(
                         <div>
                              <h2>{props.contact.name} - {props.contact.email} - {props.contact.phone}</h2>
                                <Link to = {`/contacts/edit/${id}`} className="btn btn-primary"> Edit</Link>
                                <Link to = "/contacts" className="btn btn-secondary">  back</Link>
                         </div>
                     )
                }  
            </div>
        )
}
const mapStateToProps = (state,props) => {
    return{
        contact: state.contacts.find(contact => contact._id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(ContactShow)