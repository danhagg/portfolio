import Header from '../components/shared/Header';
import React from 'react';

// Dumb component, get data, return data
// const Index = () => {
//     return (<h1>I am the index page</h1>)     
// }

class Index extends React.Component {

    render(){
        return (
        
        <div>
        <h1>Index Page</h1>
        <Header title={'I am a Header Component'} />
        </div>
        )
    }
}

export default Index