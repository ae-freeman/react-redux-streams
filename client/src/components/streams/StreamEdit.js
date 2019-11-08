import _ from "lodash";
import React from "react";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";


class StreamEdit extends React.Component {
componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    //supposed to fetch data itself but it is not?
}

onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
}

    render() {
        console.log(this.props);
        
        if(!this.props.stream){
            return <div>Loading</div>
        }
        
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                initialValues={_.pick(this.props.stream, "title", "description")}
                 onSubmit={this.onSubmit}
                 />
            </div>
           
        )
    }
    
};

const mapStateToProps = (state, ownProps) => {
    //ownProps = the same props as above. 
    return {stream: state.streams[ownProps.match.params.id]};
};


export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);


