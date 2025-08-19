 import React from "react";

 const LikeButton = (props) =>  {
  const [liked, setLiked] = React.useState(props.initialLiked);

  const buttonStyle = {
    background: 'none',
    border: '2px solid',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '99999px',
    fontSize: '16px',
    backgroundColor: liked ? '#e0245e' : '#ffffff',
    transition: 'color 0.3s ease'
  };

  return (
    <button style={buttonStyle} onClick={() => setLiked(!liked)}>
      {liked ? '💖 Liked' : '🤍 Like'}
    </button>
    );
 }

 export default LikeButton;