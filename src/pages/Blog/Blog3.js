const Blog3 = () => {
    const blogPost = {
        id: 3,
        title: "Blockchain Security: Key Considerations for Developers",
        content: `
            <p>
                Blockchain technology has transformed industries by providing decentralized and immutable systems. However, ensuring robust security is crucial to safeguarding assets and maintaining trust. Below are key considerations for developers to enhance blockchain security:
            </p>

            <h2>1. Smart Contract Vulnerabilities</h2>
            <p>
                Smart contracts, the backbone of many blockchain applications, can contain exploitable vulnerabilities. Common issues include:
            </p>
            <ul>
                <li>Reentrancy attacks</li>
                <li>Integer overflows</li>
                <li>Unprotected functions</li>
            </ul>
            <p>
                <strong>Best Practices:</strong> Conduct rigorous audits, utilize formal verification tools, and follow established standards like OpenZeppelin for secure development.
            </p>

            <h2>2. Private Key Management</h2>
            <p>
                The security of private keys is paramount. Compromised private keys can result in the loss of assets or unauthorized access.
            </p>
            <ul>
                <li>Adopt secure storage solutions like hardware wallets.</li>
                <li>Implement multi-signature wallets for additional security layers.</li>
                <li>Educate users on safeguarding their keys.</li>
            </ul>

            <h2>3. 51% Attack Risk</h2>
            <p>
                A 51% attack occurs when a malicious entity gains majority control of a blockchain's network, enabling them to alter transaction histories or block new transactions.
            </p>
            <p>
                <strong>Mitigation:</strong> Leverage highly decentralized networks with robust consensus mechanisms, such as Proof-of-Stake (PoS), which are less susceptible to such attacks compared to Proof-of-Work (PoW).
            </p>

            <h2>4. Decentralized Oracles</h2>
            <p>
                Oracles provide essential external data to smart contracts but can pose risks if compromised. 
            </p>
            <p>
                <strong>Solution:</strong> Use decentralized oracles like Chainlink to ensure data integrity and minimize single points of failure.
            </p>

            <h2>5. Phishing and Social Engineering</h2>
            <p>
                Phishing attacks target users and developers to steal sensitive information, such as private keys, or lure them into malicious contracts.
            </p>
            <p>
                <strong>Preventative Measures:</strong> Educate users, implement anti-phishing mechanisms in dApps, and promote secure transaction signing using protocols like EIP-712.
            </p>

            <p>
                By proactively addressing these considerations, developers can build secure blockchain applications, minimize vulnerabilities, and contribute to a resilient blockchain ecosystem.
            </p>
        `,
        imageUrl: "data:image/jpeg;base64,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"
    };

    return (
        <div className="prose lg:prose-xl max-w-4xl mx-auto my-8">
            <h1 className="text-4xl  mb-6">{blogPost.title}</h1>
            <img
                src={blogPost.imageUrl}
                alt="Blockchain Security"
                className="rounded-lg shadow-md mb-6"
            />
            <div
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
            ></div>
        </div>
    );
};

export default Blog3;
