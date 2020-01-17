import Link from 'next/Link';
import React from 'react';

class Header extends React.Component {

    render () {
        debugger;
        const title = this.props.title;
        return (
            <React.Fragment>
            <p>{ title }</p>
            <Link href="/"><a> Index </a></Link>
            <Link href="/about"><a> About </a></Link>
            <Link href="/cv"><a> Portfolio </a></Link>
            <Link href="/blog"><a> Blog </a></Link>
            <Link href="/cv"><a> CV </a></Link>
            </React.Fragment>
        )
    }
}

export default Header;