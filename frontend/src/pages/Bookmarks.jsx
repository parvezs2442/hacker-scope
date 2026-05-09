import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import StoryCard from "../components/StoryCard";
import { useAuth } from "../context/AuthContext";

function Bookmarks() {
  const { user } = useAuth();

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    const { data } = await API.get("/stories");

    const bookmarkedStories = data.filter((story) =>
      user.bookmarks.includes(story._id)
    );

    setStories(bookmarkedStories);
  };

  const removeBookmark = async (storyId) => {
    await API.post(`/stories/${storyId}/bookmark`);
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Your Bookmarks
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
              onBookmark={removeBookmark}
              isBookmarked={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookmarks;