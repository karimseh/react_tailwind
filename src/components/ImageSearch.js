import React, {useState} from 'react'

const ImageSearch = ({setTermSearch}) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setTermSearch(text)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row  items-center border-b border-b-2 border-teal-500 py-2">
                    <input type="text" placeholder="Search Image ..." value={text} onChange={(e)=>{setText(e.target.value)}}className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    <button type="submit" className="mt-5 sm:mt-0 flex-shrink-0 bg-blue-400 hover:bg-blue-300 border-teal-500 hover:border-teal-700 text-sm
                    border-4 text-white rounded py-1 px-2">Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch
