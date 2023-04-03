import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            body:'',
            limit:50,
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }
    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title:event.target.value,
            }
        });
    }
    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        });
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
        const message = `
        Added Succesfully
        Data Berikut:
        Title: ${this.state.title}
        Body: ${this.state.body}
      `;
      alert(message);
    }
    render(){
        return(
            <div>
                <form className="input" onSubmit={this.onSubmitEventHandler}>
                <h2>Notes</h2>
                    <p className="input_title_limit">
                        Remaining characters = {this.state.limit - this.state.title.length}
                    </p>
                    <input type="text" id="title" placeholder="input the title..."
                    required value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea id="body" placeholder="input the notes...  " required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit" id="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default Input;