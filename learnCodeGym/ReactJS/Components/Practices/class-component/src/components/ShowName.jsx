import { Component } from 'react';

export default class ShowName extends Component {
    render() {
        //phan ra (chuyen nhuong) object de su dung cho code do dai dong
        const {firstName, lastName} = this.props
        return (
            <h1>Hello: {firstName + ' ' + lastName}</h1>
        )
    }
}
