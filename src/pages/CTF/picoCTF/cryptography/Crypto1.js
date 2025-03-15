

import React from "react";

const Crypto1 = () => {
    return (
        <div className="p-6 text-red-400 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-400 mb-4">PicoCTF Challenge Write-Up: Encrypted Flag</h1>

            <h2 className="text-2xl font-semibold text-green-400 mt-4">Challenge Details:</h2>
            <ul className="list-disc ml-6 text-lg">
                <li><strong>Author:</strong> Loic Shema</li>
                <li><strong>Description:</strong> You will find the flag after decrypting this file.</li>
                <li><strong>Hint:</strong> Sometimes rotation is right.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-400 mt-4">Step 1: Understanding the Challenge</h2>
            <p className="text-lg">We are given an encrypted flag and a Python script that was used to encrypt it. The hint suggests that <strong>rotation is right</strong>, which indicates a <strong>Caesar Cipher (ROT cipher)</strong> with a specific shift value.</p>

            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mt-4">
                {`flag="xqkwKBN{z0bib1wv_l3kzgxb3l_555957n3}"

def rotsoemvalue(flag):
    new_flag = ""
    for i in flag:
        if i.isalpha():
            if i.islower():
                new_flag += chr((ord(i) - 97 + 18) % 26 + 97)
            else:
                new_flag += chr((ord(i) - 65 + 18) % 26 + 65)
        else:
            new_flag += i
    return new_flag

print(rotsoemvalue(flag))`}
            </pre>

            <p className="text-lg mt-4">This script shifts **only letters** (both uppercase and lowercase) by **+18** places, while leaving other characters unchanged.</p>

            <h2 className="text-2xl font-semibold text-green-400 mt-4">Step 2: Writing the Decryption Script</h2>
            <p className="text-lg">Since encryption used a shift of <strong>+18</strong>, decryption requires a shift of <strong>-18</strong>.</p>

            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mt-4">
                {`def decrypt_rot18(encrypted_flag):
    decrypted_flag = ""
    for char in encrypted_flag:
        if char.isalpha():
            if char.islower():
                decrypted_flag += chr((ord(char) - 97 - 18) % 26 + 97)
            else:
                decrypted_flag += chr((ord(char) - 65 - 18) % 26 + 65)
        else:
            decrypted_flag += char
    return decrypted_flag

encrypted_flag = "xqkwKBN{z0bib1wv_l3kzgxb3l_555957n3}"
print(decrypt_rot18(encrypted_flag))`}
            </pre>

            <h2 className="text-2xl font-semibold text-green-400 mt-4">Step 3: Getting the Flag</h2>
            <p className="text-lg">Running the script outputs the decrypted flag:</p>

            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mt-4">
                {"picoCTF{h0tut1ed_d3rcrypted_555957f3}"}
            </pre>


            <h2 className="text-2xl font-semibold text-green-400 mt-4">Step 4: Conclusion</h2>
            <p className="text-lg">This challenge used a <strong>ROT cipher (Caesar Shift)</strong> with a shift of **18**. By understanding the encryption method, we reversed it with a simple Python script.</p>
            <p className="text-lg">This was a great introduction to **classical cryptography attacks**, demonstrating the importance of **substitution ciphers** in CTF challenges.</p>
        </div>
    );
};

export default Crypto1;
