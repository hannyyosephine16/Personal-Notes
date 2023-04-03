import React from "react";
import List from "./List";
import { getInitialData, showFormattedDate } from "../utils/index";
import Input from "./Input";
import EmptyMessage from "./EmptyMessage";
import Search from "./Search";


class Noteapp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes:getInitialData(),
            search:"",
            date:showFormattedDate(new Date()),
        }

        this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note=> 
            note.id !== id);
            this.setState({notes});
    }

    onArchivedEventHandler(id){
        const notes = this.state.notes.map((note)=>
        note.id === id ? {...note, archived : !note.archived } : note)
        this.setState({notes});
    }

    onAddNotesHandler({title, body}){
        this.setState((prevState) =>{
            return{
                notes:[
                    ...prevState.notes,
                    {
                        id:+new Date(),
                        title, 
                        body,
                        archived: false,
                        createdAt: this.state.date,
                    }
                ],
            }
        })
    }

    onNoteSearchHandler(event) {
        this.setState(() => {
          return {
            search : event.target.value
          }
        })
      }
    
    render(){
    
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const NotesNonActive = notes.filter((note)=>{
            return note.archived === false
        });
        const NotesActive = notes.filter((note)=>{
            return note.archived === true
        }); 

        return(
           
            <div>
                <Search search={this.state.search} onSearch={this.onNoteSearchHandler} />
    
                <div className="body">
                    <Input addNotes = {this.onAddNotesHandler}/>
                    <h2>Active note</h2>
                    {NotesNonActive.length > 0 ? <List keyword={this.state.keyword} notes={NotesNonActive} onDelete={this.onDeleteHandler} onArchived={this.onArchivedEventHandler} /> : <EmptyMessage />}
                
                     <h2>Arsip</h2>
                    {NotesActive.length > 0 ? <List keyword={this.state.keyword} notes={NotesActive} onDelete={this.onDeleteHandler} onArchived={this.onArchivedEventHandler} />
                    : <EmptyMessage />}
                    
                </div>
                

            </div>
        );
    }
}


export default Noteapp;