import React from "react";
import {Field, reduxForm} from "redux-form"; //Field is a component that will be shown on screen
//reduxForm is a function. 


class StreamForm extends React.Component {

    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
            
        }
    }
    renderInput = ({input, label, meta}) => { //meta component has the error inside of it
        const className= `field ${meta.error && meta.touched ? "error": ""}`;
        return (
            <div className={className}>
                <label>{label}</label>
           
                <input {...input} autoComplete="off"/> 
                {this.renderError(meta)}
                
            </div>

            //input: take formProps input and add them as properties to the input element
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);//pass down onSubmit callback -> give it back when submitted?
    }


    render () {


        //this.props.handleSubmit: callback function by redux form
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description"/>
            <button className="ui button primary">Submit</button>
        </form>
    //label gets passed into render input function

        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};


export default reduxForm({
    form: "streamForm",
    validate //key and value are the same so can just write it once
})(StreamForm);

//redux form is like connect
//redux form is going to call a function, and immediately call it with stream create?

