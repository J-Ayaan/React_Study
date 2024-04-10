// BulletinBoard.jsx

import React, { useState } from 'react';
import BulletinPost from './BulletinPost';
import '/Users/jungjunkyeong/Desktop/React_Study/gpttest/src/style.css';

const BulletinBoard = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPostContent, setEditedPostContent] = useState('');

  const handleAddPost = () => {
    if (newPostContent.trim() !== '') {
      const newPost = {
        id: Date.now(),
        content: newPostContent,
      };
      setPosts([...posts, newPost]);
      setNewPostContent('');
    }
  };

  const handleDeletePost = postId => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleEditPost = () => {
    if (editedPostContent.trim() !== '') {
      const updatedPosts = posts.map(post =>
        post.id === editingPostId ? { ...post, content: editedPostContent } : post
      );
      setPosts(updatedPosts);
      setEditingPostId(null);
      setEditedPostContent('');
    }
  };

  const startEditingPost = postId => {
    const postToEdit = posts.find(post => post.id === postId);
    if (postToEdit) {
      setEditingPostId(postId);
      setEditedPostContent(postToEdit.content);
    }
  };

  return (
    <div className='bulletin-board'>
      <h2>Bulletin Board</h2>
      <div className='post-creation'>
        <textarea
          value={newPostContent}
          onChange={e => setNewPostContent(e.target.value)}
          placeholder='Write your post here...'
        ></textarea>
        <button onClick={handleAddPost}>Post</button>
      </div>
      {posts.map(post => (
        <BulletinPost
          key={post.id}
          post={post}
          onDelete={handleDeletePost}
          onEdit={startEditingPost}
          isEditing={editingPostId === post.id}
          editedContent={editedPostContent}
          setEditedContent={setEditedPostContent}
          onSave={handleEditPost}
        />
      ))}
    </div>
  );
};

export default BulletinBoard;
