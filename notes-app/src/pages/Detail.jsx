import React from "react";
import CreateBar from "../components/CreateBar";
import SideBar from "../components/SideBar";
import DetailNotes from "../components/DetailNotes";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";

function DetailPageWrapper() {
    const { id } = useParams();
    return <Detail id={id} />;
}

class Detail extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          note: getNote(props.id)
        };
    }

    render () {
        if (this.state.note === null) {
            return <p>Note is not found!</p>;
        }

        return (
            <div>
                <SideBar />
                <div className="p-4 ml-0 sm:ml-64">
                    <CreateBar title={"My Note"}/>
                    <DetailNotes {...this.state.note}/>
                </div>
            </div>
        );
    }
}

export default DetailPageWrapper;