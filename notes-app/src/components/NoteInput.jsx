import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const { title, body } = this.state;
        if (title.trim() === "" || body.trim() === "") {
            alert("Please fill in all fields");
            return;
        }
        
        const newNote = {
            id: `notes-${Date.now()}`,
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
        };
        this.props.addNote(newNote);
        this.setState({
            title: "",
            body: ""
        });
    }

    render() {
        return (
            <div className="bg-white p-8 mt-8 sm:mt-0 rounded shadow-md w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Add Note</h2>

                <form onSubmit={this.onSubmitEventHandler}>
                    <div className="grid gap-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <input type="text" id="title" name="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} className="mt-1 p-2 w-full border rounded-md"/>
                        </div>
                        <div>
                            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
                            <textarea id="body" name="body" value={this.state.body} onChange={this.onBodyChangeEventHandler} className="mt-1 p-2 w-full border rounded-md"/>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full p-3 bg-black text-white rounded-md">Add</button>
                    </div>
                </form>
            </div>
        );
    };
};

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;