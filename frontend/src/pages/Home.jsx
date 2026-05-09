import toast from "react-hot-toast";

const handleBookmark = async (storyId) => {
  if (!user) {
    toast.error("Please login first");
    return;
  }

  try {
    const { data } = await API.post(`/stories/${storyId}/bookmark`);

    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Bookmark updated");

    setTimeout(() => {
      window.location.reload();
    }, 800);
  } catch (error) {
    toast.error("Something went wrong");
  }
};