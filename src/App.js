import React from 'react';
import axios from 'axios';
import Card from './card';

class App extends React.Component{
    state = { images: [], isloading: false };


    componentDidMount(){
        this.setState({isloading: true});
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            this.setState({
                images: response.data,
                isloading: false
            });
        })
    }

    

    render(){
        const {isloading} = this.state;
        if(isloading){
            return <p>Loading....</p>
        } else {
        return(
            <div>
                <Card titles={this.state.images}/>
            </div>
            );
        }
    };
}

export default App;