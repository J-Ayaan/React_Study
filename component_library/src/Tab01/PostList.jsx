import React, { useState } from 'react';
import PostListHeader from './PostListHeader';

const PostList = () => {
    // Sample data for posts
    const posts = [
        { id: 1, title: 'Post 1', tag: 'Tag 1', author: 'Author 1', views: 10, createdAt: '2022-04-01' },
        { id: 2, title: 'Post 2', tag: 'Tag 2', author: 'Author 2', views: 20, createdAt: '2022-04-02' },
        { id: 3, title: 'Post 1', tag: 'Tag 1', author: 'Author 1', views: 10, createdAt: '2022-04-01' },
        { id: 4, title: 'Post 2', tag: 'Tag 2', author: 'Author 2', views: 20, createdAt: '2022-04-02' },
        { id: 5, title: 'Post 1', tag: 'Tag 1', author: 'Author 1', views: 10, createdAt: '2022-04-01' },
        { id: 6, title: 'Post 2', tag: 'Tag 2', author: 'Author 2', views: 20, createdAt: '2022-04-02' },
        { id: 7, title: 'Post 1', tag: 'Tag 1', author: 'Author 1', views: 10, createdAt: '2022-04-01' },
        { id: 8, title: 'Post 2', tag: 'Tag 2', author: 'Author 2', views: 20, createdAt: '2022-04-02' },
        { id: 9, title: 'Post 1', tag: 'Tag 1', author: 'Author 1', views: 10, createdAt: '2022-04-01' },
        { id: 10, title: 'Post 2', tag: 'Tag 2', author: 'Author 2', views: 20, createdAt: '2022-04-02' },
        { id: 11, title: 'Post 1', tag: 'Tag 1', author: 'Author 1', views: 10, createdAt: '2022-04-01' },

        // Add more posts as needed
    ];

    const postsPerPage = 10; // Number of posts to display per page
    const [currentPage, setCurrentPage] = useState(1); // Current page

    // Calculate the index of the first and last post to display on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate the total number of pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Generate an array of page numbers for pagination
    const pageNumbers = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        let startPage = currentPage - 2;
        if (startPage < 1) {
            startPage = 1;
        } else if (startPage + 4 > totalPages) {
            startPage = totalPages - 4;
        }
        for (let i = startPage; i < startPage + 5; i++) {
            pageNumbers.push(i);
        }
    }

    const postListStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        border: '1px solid black',
        padding: '10px',
        maxWidth: '800px',
        width: '100%',
        margin: 'auto',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '10px',
        minHeight: '500px', // Set a minimum height for the table
    };


    const postStyle = {
        border: '1px solid black', // Add outline around each post
        height: '50px', // Set a fixed height for each row
        minHeight: '50px', // Set a minimum height for each row
    };


    const paginationStyle = {
        marginTop: '10px',
        position: 'fixed',
        bottom: '200px',
        left: '50%',
        transform: 'translateX(-50%)',
    };


    return (
        <div style={postListStyle}>
          <table style={tableStyle}>
            <thead>
              <PostListHeader />
            </thead>
            <tbody>
              {[...Array(postsPerPage).keys()].map(index => {
                const post = currentPosts[index];
                if (post) {
                  return (
                    <tr key={post.id} style={{ height: '50px' }}>
                      <td style={postStyle}>{post.id}</td>
                      <td style={postStyle}>{post.title}</td>
                      <td style={postStyle}>{post.tag}</td>
                      <td style={postStyle}>{post.author}</td>
                      <td style={postStyle}>{post.views}</td>
                      <td style={postStyle}>{post.createdAt}</td>
                    </tr>
                  );
                } else {
                  // Render an empty row with transparent background
                  return (
                    <tr key={index} style={{ height: '50px', backgroundColor: 'transparent' }}>
                      <td colSpan="6" style={{ ...postStyle, border: 'none', padding: 0 }}>&nbsp;</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          {/* Pagination controls */}
          <div style={paginationStyle}> 
            <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>Previous</button>
            {pageNumbers.map(number => (
              <button key={number} onClick={() => setCurrentPage(number)}>{number}</button>
            ))}
            <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      );
}

export default PostList;
