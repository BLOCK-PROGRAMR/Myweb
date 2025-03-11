const Blog2 = () => {
    const blogPost = {
        id: 2,
        title: "The Role of Smart Contracts in Blockchain Technology",
        content: `
            <p>
                Smart contracts are self-executing contracts with the terms of the agreement directly embedded in code. These contracts run on blockchain networks, ensuring security, transparency, and efficiency in various applications.
            </p>

            <h2>1. What are Smart Contracts?</h2>
            <p>
                A smart contract is a program that automatically executes, enforces, or documents the terms of an agreement without the need for intermediaries. By utilizing blockchain's immutable and decentralized nature, smart contracts bring reliability and trust to digital transactions.
            </p>

            <h2>2. How Do Smart Contracts Work?</h2>
            <p>
                Smart contracts function on blockchain networks, leveraging the following characteristics:
            </p>
            <ul>
                <li><strong>Immutability:</strong> Once deployed, their code cannot be altered, ensuring consistent behavior.</li>
                <li><strong>Automation:</strong> They execute predefined terms automatically when specific conditions are met.</li>
                <li><strong>Decentralization:</strong> They operate without intermediaries, reducing costs and increasing efficiency.</li>
            </ul>

            <h2>3. Key Use Cases</h2>
            <p>
                Smart contracts have a broad range of applications across industries, including:
            </p>
            <ul>
                <li><strong>Finance (DeFi):</strong> Enabling decentralized lending, trading, and yield farming.</li>
                <li><strong>Supply Chain:</strong> Tracking goods, verifying authenticity, and automating payments upon delivery.</li>
                <li><strong>Legal Agreements:</strong> Automating contract execution, such as escrow services or royalty distributions.</li>
            </ul>

            <p>
                The adoption of blockchain technology and smart contracts is reshaping industries by enhancing efficiency, reducing fraud, and eliminating the need for intermediaries. As this technology evolves, its potential to streamline processes and foster innovation will continue to grow.
            </p>
        `,
        imageUrl: "data:image/jpeg;base64,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"
    };

    return (
        <div className="prose lg:prose-xl max-w-4xl mx-auto my-8">
            <h1 className="text-4xl  mb-6">{blogPost.title}</h1>
            <img
                src={blogPost.imageUrl}
                alt="Smart Contracts Visual"
                className="rounded-lg shadow-md mb-6"
            />
            <div
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
            ></div>
        </div>
    );
};

export default Blog2;
