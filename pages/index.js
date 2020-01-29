import Header from '../components/shared/Header';
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
// import Link from 'next/link';

// Dumb component, get data, return data
// const Index = () => {
//     return (<h1>I am the index page</h1>)     
// }

class Index extends React.Component {

    render(){
        return (
            <div>
                <BaseLayout>
            <h1>Index Page</h1>
            <Header title={'Header'}>
                <h1>jsx subtitle</h1>
                </Header>
                </BaseLayout>
            </div>

        )
    }
}

export default Index