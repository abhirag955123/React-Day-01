import React from 'react';

const WebPage = () => {
  return (
    <div>
      {/* Main Heading */}
      <h1>Learn Web Developement</h1>
      {/* First Div with Paragraph */}
      <div>
        <p> Welcome to the MDN learning area. This set of articles aims to guide complete 
          beginners to web development with all that they need to start coding websites.</p>
      </div>
      {/* Second Div with Paragraph and Anchor */}
      <div>
        <p> The aim of this area of MDN is not to take you from "beginner" to "expert" but to
            take you from "beginner" to "comfortable." From there, you should be able to start 
            making your way, learning from, and other intermediate to advanced  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn more about React
        </a> resources that assume a lot of previous knowledge</p>
        
      </div>
      <div>
        <p>If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
      </div>
    </div>
  );
};

export default WebPage;
