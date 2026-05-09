const handleBookmark = async (storyId) => {
  if (!user) {
    alert("Please login first");
    return;
  }

  try {
    const { data } = await API.post(
      `/stories/${storyId}/bookmark`
    );

    localStorage.setItem("user", JSON.stringify(data));
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};