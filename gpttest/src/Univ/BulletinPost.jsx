// BulletinPost.jsx

import React from 'react';

const BulletinPost = ({ post, onDelete, onEdit, isEditing, editedContent, setEditedContent, onSave }) => {
  return (
    <div className='bulletin-post'>
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={e => setEditedContent(e.target.value)}
          placeholder='Edit your post...'
        ></textarea>
      ) : (
        <p>{post.content}</p>
      )}
      <div className='button-container'>
        {!isEditing ? (
          <>
            <button onClick={() => onEdit(post.id)}>Edit</button>
            <button onClick={() => onDelete(post.id)}>Delete</button>
          </>
        ) : (
          <button onClick={onSave}>Save</button>
        )}
      </div>
    </div>
  );
};

export default BulletinPost;
