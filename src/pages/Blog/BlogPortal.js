import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
// import Blog1 from './Blog1';
// import Blog2 from './Blog2';
// import Blog3 from './Blog3';
import blogData from './BlogData';

const BlogPortal = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [visibleBlogIndex, setVisibleBlogIndex] = useState(0); // Track which blog to show
    const [showMore, setShowMore] = useState(false); // Flag to toggle show more/less

    // Simulated blog data - in real app, this would come from props or APp

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Filter blogs based on search and category
    const filteredBlogs = blogData.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['all', ...new Set(blogData.map(blog => blog.category))];

    const handleShowMore = () => {
        setShowMore(true);
    };

    const handleShowLess = () => {
        setShowMore(false);
        setVisibleBlogIndex(0); // Go back to the first post
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 text-center">
                    {/* <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                        Blog Portal
                    </h1> */}
                    <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto mt-10">
                        Explore our latest articles and tutorials, dive deep into cutting-edge topics, and stay ahead with insightful reads.
                    </p>

                    {/* Search and Filter Section */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="pl-10 p-2 w-full border rounded"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {isLoading ? (
                    <div className="space-y-6">
                        {[1, 2].map(i => (
                            <div key={i} className="animate-pulse">
                                <div className="h-64 bg-gray-200 rounded-lg" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        {/* Display blogs */}
                        {filteredBlogs.length > 0 && (
                            <div>
                                {/* Render all posts or only the first one based on showMore */}
                                {(showMore ? filteredBlogs : [filteredBlogs[visibleBlogIndex]]).map((blog, index) => (
                                    <div key={blog.id} className="bg-white shadow-lg rounded-lg p-8 mb-8">
                                        <h2 className="text-3xl font-semibold mb-4">{blog.title}</h2>
                                        <p className="text-sm text-gray-500 mb-6">
                                            {blog.date} · {blog.readTime} read
                                        </p>
                                        <div className="mb-6">
                                            <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <div className="pt-6">
                                            {/* Use React.createElement to dynamically render the component */}
                                            {React.createElement(blog.component)}
                                        </div>
                                    </div>
                                ))}

                                {/* Show More / Show Less Controls */}
                                <div className="flex justify-center gap-4">
                                    {showMore && (
                                        <button
                                            onClick={handleShowLess}
                                            className="px-4 py-2 border rounded-full"
                                        >
                                            Show Less
                                            <ChevronUp className="ml-2 h-4 w-4" />
                                        </button>
                                    )}

                                    {!showMore && filteredBlogs.length > 1 && (
                                        <button
                                            onClick={handleShowMore}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-full flex items-center"
                                        >
                                            Show More
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPortal;
