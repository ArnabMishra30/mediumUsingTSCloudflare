import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles for the editor
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const navigate = useNavigate(); // Initialize useNavigate

  // const handlePublish = () => {
  //   if (title && content) {
  //     // Handle publishing logic here, e.g., sending the data to an API
  //     axios.post(`${BACKEND_URL}/api/v1/blog`,{
  //       title,
  //       content
  //     })

  //   } else {
  //     alert("Please fill in both the title and content before publishing.");
  //   }
  // };

  const handlePublish = async () => {
    if (title && content) {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
          title,
          content,
        }, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        // Assuming the response contains the newly created blog's ID
        const { id } = response.data; // Adjust based on your response structure
        alert("Your post has been published!"); // Show alert
        navigate(`/blog/${id}`); // Navigate to the blog post
      } catch (error) {
        console.error("Error publishing the blog:", error);
        alert("There was an error publishing your post. Please try again.");
      }
    } else {
      alert("Please fill in both the title and content before publishing.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center px-10 py-5">
        {/* Editor Area */}
        <div className="w-full max-w-4xl">
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-5xl font-bold text-gray-600 outline-none placeholder-gray-300 mb-4"
          />
          {/* Rich Text Editor */}
          <div className="h-96">
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              className="h-full text-lg text-gray-600"
              placeholder="Tell your story..."
            />
          </div>
          {/* Publish Button - Moved Here */}
          <div className="flex justify-start mt-12">
            <button
              onClick={handlePublish}
              className="bg-green-500 text-white px-4 py-2 rounded-md font-medium transition duration-200 hover:cursor-pointer hover:bg-green-800"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
