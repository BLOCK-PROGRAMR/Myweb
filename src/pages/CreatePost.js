import React, { useState } from "react";

const CreatePost = () => {
    const [newPost, setNewPost] = useState({ title: "", content: "", file: null });

    const handleCreatePost = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", newPost.title);
        formData.append("content", newPost.content);
        formData.append("file", newPost.file);

        fetch("http://localhost:5000/api/posts", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setNewPost({ title: "", content: "", file: null });
                console.log("Post created:", data);
            })
            .catch((error) => console.error("Error creating post:", error));
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <form onSubmit={handleCreatePost}>
                <h2 className="text-3xl font-bold text-center mb-6">Create a New Post</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Content</label>
                    <textarea
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Upload Image/File</label>
                    <input
                        type="file"
                        onChange={(e) => setNewPost({ ...newPost, file: e.target.files[0] })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">
                    Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
