import React from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import CreateBar from "../components/CreateBar";
import SearchBar from "../components/SearchBar";
import NoteItem from "../components/NoteItem"; 
import { getArchivedNotes, unarchiveNote, deleteNote } from "../utils/local-data";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <Archive defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class Archive extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            keyword: props.defaultKeyword || '',
            notes: getArchivedNotes().filter(note => note.archived),
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
            notes: getArchivedNotes(),
          }
        });
    }

    onArchiveHandler(id) {
        unarchiveNote(id);
      
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.filter((note) => {
                return note.id !== id;
            });
            return { notes: updatedNotes };
        });
    }    

    render () {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <div>
                <SideBar />
                <div className="p-4 ml-0 sm:ml-64">
                    <CreateBar title={"Archive"}/>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                    {filteredNotes.length === 0 ? (
                        <p>Archive Empty</p>
                    ) : (
                        <NoteItem notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={true}/> 
                    )}
                </div>
            </div>
        );
    }
};

export default ArchivePageWrapper;