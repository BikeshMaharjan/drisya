import React, { useState } from "react";
import "./App.css";

const initialContents = [
  {
    title: "React",
    url: "https://reactjs.org/",
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    objectID: 1,
  },
];

function App() {
  const [content, setContent] = useState(initialContents);
  const [contentId, setContentId] = useState(initialContents.length);
  const handleLinkInput = (newContent) => {
    const allContents = [
      ...content,
      {
        title: newContent.title,
        url: newContent.url,
        objectID: contentId + 1,
      },
    ];
    setContent(allContents);
    setContentId(contentId + 1);
  };

  return (
    <div>
      <VideoInput onLinkSubmit={handleLinkInput} />
      <hr />
      <List list={content} />
    </div>
  );
}

const VideoInput = ({ onLinkSubmit }) => {
  const [link, setLink] = useState("");

  const handleLinkEntered = (link) => {
    setLink(link.target.value);
  };

  const [title, setTitle] = useState("");

  const handleTitleEntered = (title) => {
    setTitle(title.target.value);
  };

  const handleOk = () => {
    onLinkSubmit({ url: link, title });
  };
  return (
    <div>
      <label htmlFor="videoTitle"> Enter video title: </label>
      <input
        id="videoTitle"
        type="text"
        value={title}
        onChange={handleTitleEntered}
      />
      <label htmlFor="videoLink"> Enter video link: </label>
      <input
        id="videoLink"
        type="text"
        value={link}
        onChange={handleLinkEntered}
      />
      <button onClick={handleOk}> Ok </button>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map(({ objectID, url, title }) => {
        return (
          <li key={objectID}>
            <span>
              <a href={url}>{title}</a>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default App;
