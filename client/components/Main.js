import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render(){
        return(
            <div>
                <h1><Link to="/">Reduxstagram</Link></h1>
                {React.cloneElement(this.props.children, this.props)}        {/* takes  any props from Main and passed them down the tree */}

            </div>
        )
    }
})

export default Main;