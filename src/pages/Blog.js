import React, { useState } from "react";

const Blog = () => {
    const [visiblePostsCount, setVisiblePostsCount] = useState(3); // Number of posts to display

    // Static blog posts
    const posts = [
        {
            id: 1,
            title: "Understanding the Layers of Blockchain",
            content: `
        Blockchain technology can be divided into three primary layers, each serving a unique purpose:
        
        1. **Application Layer**:
           - This is the user-facing part of the blockchain.
           - Examples: Decentralized Applications (DApps), Smart Contracts.
        
        2. **Protocol Layer**:
           - Defines the rules for data exchange and consensus mechanisms.
           - Examples: Bitcoin, Ethereum, Solana protocols.
        
        3. **Network Layer**:
           - Handles communication between nodes in the blockchain network.
           - Ensures security and synchronization of data.
        
        Understanding these layers helps in grasping how blockchain operates and powers various decentralized solutions.`,
            imageUrl:
                "data:image/png;base64,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", // Placeholder image
            date: "2024-12-23",
        },
    ];

    // Show more posts
    const handleShowMore = () => {
        setVisiblePostsCount(visiblePostsCount + 3); // Show 3 more posts each time
    };

    // Show less posts
    const handleShowLess = () => {
        setVisiblePostsCount(3); // Reset to showing only 3 posts
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Welcome to My Blog</h2>

            <div className="w-full max-w-2xl mx-auto mb-8">
                <h2 className="text-3xl font-bold text-center mb-6">All Blog Posts</h2>

                <div className="space-y-6">
                    {posts.slice(0, visiblePostsCount).map((post) => (
                        <div key={post.id} className="border p-4 rounded shadow-md">
                            <h3 className="text-2xl font-semibold">{post.title}</h3>
                            <p className="mt-2 text-gray-700 whitespace-pre-line">
                                {post.content}
                            </p>
                            {post.imageUrl && (
                                <div className="mt-4">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full max-h-64 object-cover rounded"
                                    />
                                </div>
                            )}
                            <p className="text-sm text-gray-500 mt-2">
                                {new Date(post.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))}

                    {/* Show More or Show Less */}
                    {visiblePostsCount < posts.length ? (
                        <button
                            onClick={handleShowMore}
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Show More
                        </button>
                    ) : (
                        visiblePostsCount > 3 && (
                            <button
                                onClick={handleShowLess}
                                className="w-full bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Show Less
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
