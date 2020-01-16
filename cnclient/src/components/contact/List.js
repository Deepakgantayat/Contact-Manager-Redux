import React from 'react'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'
import {startRemoveContact} from '../actions/contacts'

 function ContactList(props){
    const handleRemove = (id) =>{
        props.dispatch(startRemoveContact(id))
     }
        return(
            <div className="container mt-5">
                <br/>
               <h2> Listing All Contacts - {props.contacts.length}</h2>
               <br/>
               <table className="table">
                   <thead>
                       <tr>
                           <th scope="col">Name</th>
                           <th scope="col">Email</th>
                           <th scope="col">Phone</th>
                           <th scope="col">show</th>
                           <th scope="col">Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.contacts.map((contact) =>{
                              return (<tr key ={contact._id}>
                                   <td>{contact.name}</td>
                                   <td>{contact.email}</td>
                                   <td>{contact.phone}</td>
                                   <td><Link to = {`/contacts/${contact._id}`} className="btn btn-primary">show</Link></td>
                                   <td>
                                   <button className="btn btn-danger" onClick= {() =>{const confirmRemove = 
                                      
                                      swal({
                                        title: "Are you sure you want to delete?",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        if (willDelete) {
                                          swal("Successfully Deleted", {
                                            icon: "success",
                                          });               
                                          handleRemove(contact._id)
                                        } 
                                      })
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <Link to = "/contacts/new" className="btn btn-secondary">Add New Contact</Link>

            </div>
        )
    }

const mapStateToProps = (state) => {
    return{
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)