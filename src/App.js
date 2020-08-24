import React from 'react';
import InformationForm from './Component/InformationForm';
import ShowInfo from './Component/ShowInfo';

class App extends React.Component{
    render(){
        return(
            <div className = "App">
                <InformationForm />
                <ShowInfo />
            </div>
        );
    };
}

export default App;