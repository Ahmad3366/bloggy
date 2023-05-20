import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAutor] = useState('Ali')
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {title, body, author}

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false)
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h1>Add a New blog</h1>
            <form onSubmit={handleSubmit}>
                <label>blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label> blog body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAutor(e.target.value)}
                >
                    <option value="Ali">Ali</option>
                    <option value="Khalid">Khalid</option>
                    <option value="Ahmad">Ahmad</option>
                    <option value="Mario">Mario</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;