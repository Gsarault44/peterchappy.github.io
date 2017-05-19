import React, { Component } from 'react';
import './TypedText.css'

export default class TypedText extends Component {

    constructor(props){
        super(props);
        this.state = { textToShow: this.props.body, shownText: ''};
    }

    componentWillMount(){
        this.timer = setInterval(this.type.bind(this), 50);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        if(this.props.renderOnce){
            this.setState({shownText: this.state.textToShow});
        }
    }

    type(){
        if(this.state.shownText.length <= this.state.textToShow.length-1){
            this.setState({ shownText: this.state.shownText + this.state.textToShow[this.state.shownText.length]});
        }else{
            clearInterval(this.timer);
        }
    }

    render(){
        return(
            <h1 className="typedText">{this.state.shownText}</h1>
        );
    }
}