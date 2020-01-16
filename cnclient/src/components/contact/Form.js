import React from 'react'

export default class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            email: props.email ? props.email: '',
            phone: props.phone ? props.phone: ''
        }
    }

    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label> Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label> Phone</label>
                        <input type="text" value={this.state.phone} onChange={this.handleChange} name="phone" className="form-control"/>
                    </div>
                    <input type ="submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}