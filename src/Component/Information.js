import React from 'react';
import { connect } from 'react-redux';

class Information extends React.Component{
    render(){
        return(
        <div className = 'container' style={{backgroundColor:'white', borderRadius:'10px', marginTop:'30px'}}>
            <div className = 'row'>
                <div className = 'col-1' >
                    <label>
                        <input  type="checkbox" checked={this.props.info.checking} onClick = {()=> this.props.info.checking = !this.props.info.checking}/>
                        <span className='font-style'></span>
                    </label>
                </div>
                <div className = 'col-3 center font-style'>{this.props.info.firstname}{' '}{this.props.info.lastname}</div>
                <div className = 'col-2 center font-style'>{this.props.info.gender}</div>
                <div className = 'col-2 center font-style'>{this.props.info.mobileno}</div>
                <div className = 'col-2 center font-style setuppercase'>{this.props.info.nation}</div>
                <div className = 'col-2 center' style={{marginTop:'0.5%'}}>
                    <button class="waves-effect waves-light btn" onClick = {() => this.props.dispatch({type: 'EDI_INFO', id: this.props.info.id })}>
                        EDIT
                    </button>
                    <button class="waves-effect waves-light btn" onClick = {() => this.props.dispatch({type: 'DEL_INFO', id: this.props.info.id })}>
                        DELETE
                    </button>
                </div>
            </div>
        </div>
        );
    };
}

export default connect()(Information);