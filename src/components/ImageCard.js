import React from 'react'

const ImageCard = ({ image }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} className="w-full" alt=""/>
        <div className="px-6 py-4">
          <div className="mb-6 font-bold text-purple-500 text-xl">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views : </strong> {image.comments}
            </li>
            <li>
              <strong>Downloads : </strong> {image.downloads}
            </li>
            <li>
              <strong>Likes : </strong> {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
        {image.tags.split(',').map((tag, index) => (
        <span key={index} className="bg-gray-200 inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">#{tag}</span>

        ))}

        </div>
      </div>
    )
}

export default ImageCard
