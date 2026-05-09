function StoryCard({ story, onBookmark, isBookmarked }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">
        <a
          href={story.url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600"
        >
          {story.title}
        </a>
      </h2>

      <div className="text-gray-600 text-sm mb-4">
        <p>👤 {story.author}</p>
        <p>⭐ {story.points} points</p>
        <p>🕒 {story.postedAt}</p>
      </div>

      <button
        onClick={() => onBookmark(story._id)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {isBookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>
    </div>
  );
}

export default StoryCard;