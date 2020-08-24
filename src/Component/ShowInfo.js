import React from 'react';
import Information from './Information';
import EditComponent from './EditComponent';
import { connect } from 'react-redux';

class ShowInfo extends React.Component{

    render(){
        return(
            <div className='container container-style '>
                <div className = 'row ' >
                    <div className = 'col-1 center font-style' >
                        <label>
                            <input id='cb' type="checkbox" onChange = {() => this.props.dispatch({type: 'CHK_ALL' })}/>
                            <span style={{color:"black"}}>All</span>
                        </label>
                    </div>
                    <div className = 'col-1 center font-style' >
                    <button class="waves-effect waves-light btn" onClick = {() => this.props.dispatch({type: 'DEL_ALL'})}>
                        DELETE
                    </button>
                    </div>
                    <div className = 'col-2 center font-style'>NAME</div>
                    <div className = 'col-2 center font-style'>GENDER</div>
                    <div className = 'col-2 center font-style'>MOBILE PHONE</div>
                    <div className = 'col-2 center font-style'>NATIONALITY</div>
                    <div className = 'col-2'></div>
                </div>
                {console.log(this.props.infocard)}
                {this.props.infocard.map((info) => (
                <div key = {info.id}>
                    {info.editing ? 
                    <EditComponent info = {info} key={info.id} /> :
                    <Information key={info.id} info = {info} />}
                </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        infocard : state
    }
} 

export default connect(mapStateToProps)(ShowInfo);