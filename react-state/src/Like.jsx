import { useState } from "react";
export default function Like(){
    let [Likes, setLikes] = useState(true);
    function toggleLike(){
        setLikes(!Likes);
        console.log(setLikes)
    }
    let likeStyle = {color : "red"};
    let disStyle = {color : "white"}
    return(<div>
           <p onClick={toggleLike}>
            {Likes ? (
                <i class="fa-solid fa-thumbs-up" style={likeStyle}>&nbsp;&nbsp;&nbsp;Liked</i>
            ) : (
                <i class="fa-solid fa-thumbs-down" style={disStyle}>&nbsp;&nbsp;&nbsp;Disliked</i>
            )
            }
           </p>
    </div>
    );
}