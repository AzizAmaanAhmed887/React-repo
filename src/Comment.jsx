import {useState} from "react"
import './Comment.css'
import CommentsForm from "./CommentsForm";

export default function Comment() {
    // state variable comments
    let [comments, setComments] = useState([{
        username: "@aa",
        remarks: "Great job",
        rating: 5
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment])
    }

    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, index) => (
                    <div key={index} className="comment">  {/* Use a unique key, e.g., comment.id if available */}
                        <span>Comment: {comment.remarks}</span>
                        &nbsp;
                        <span>(Rating: {comment.rating})</span>
                        &nbsp;
                        <p>Username: {comment.username}</p>
                    </div>
                ))}
            </div>
            <hr/>
            <hr/>
            <CommentsForm addNewComment={addNewComment}/>
        </>
    );
}