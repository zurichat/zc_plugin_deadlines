import React, { Component } from 'react';

class App extends Component {
    componentDidMount (){
        this.textarea.focus();
    }
    render(){
        const style = {
            minHeight: '5.6rem',
            minWidth: '15.3rem',
        };

        return (
            <div> Textarea <br />
                <label htmlFor="" className="font-sans font-bold text-2x1">Description</label>
                <textarea
                className="max-w-lg max-h-44 p-4 resize-none box-border" 
                style={style}
                ref={c=>this.textarea=c}
                placeholder="Type a message"
                rows={1} defaultValue=""/>
            </div>
        );
    }
}

