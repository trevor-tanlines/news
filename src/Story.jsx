import { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './Story';

function App() {
  // Get stories from news feed
  const [stories, setStories] = useState(news_feed.results);

  // Function to remove a story by index
  const removeStory = (indexToRemove) => {
    const updatedStories = stories.filter((_, index) => index !== indexToRemove);
    setStories(updatedStories);
  };

  return (
    <div className="App" style={styles.appContainer}>
      <h1 style={styles.title}>News Feed</h1>
      {stories.map((story, index) => (
        <Story
          key={index}
          story={story}
          onRemove={() => removeStory(index)}
        />
      ))}
    </div>
  );
}

const styles = {
  appContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default App;
