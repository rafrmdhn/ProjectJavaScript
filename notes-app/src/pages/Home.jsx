import React from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import CreateBar from "../components/CreateBar";
import NoteItem from "../components/NoteItem";
import { deleteNote, getAllNotes, archiveNote } from "../utils/local-data";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <Home defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class Home extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            keyword: props.defaultKeyword || '',
            notes: getAllNotes(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
     
    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });
     
        this.props.keywordChange(keyword);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
          return {
            notes: getAllNotes(),
          }
        });
    }

    onArchiveHandler(id) {
        archiveNote(id);
      
        this.setState((prevState) => {
          const updatedNotes = prevState.notes.map((note) => {
            if (note.id === id) {
              return { ...note, archived: !note.archived };
            }
            return note;
          });
          return { notes: updatedNotes };
        });
    }    

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            ) && !note.archived; 
        });

        return (
            <div>
                <SideBar />
                <div className="p-4 ml-0 sm:ml-64">
                    <CreateBar title={"My Note"}/>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                    {filteredNotes.length === 0 ? (
                        <p>Note Empty</p>
                    ) : (
                        <NoteItem notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={true}/> 
                    )}
                </div>
            </div>
        );
    }
}

export default HomePageWrapper;