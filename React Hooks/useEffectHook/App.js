import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//  Destructure the `subreddit` from props:
function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);

  // effect functions can't be async, so declare the
  // async function inside the effect, then call it
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

      const json = await res.json();

      setPosts(json.data.children.map(c => c.data));
    }
    fetchData();

    //passing [setPosts] as second arugument to avoid the infinite loop of fetch-rernder of component
    //setPosts is a setter returned by useState, it won’t be recreated every render, and so the effect will only run once.
  }, [subreddit, setPosts]);

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title} </h4>
            <p>{post.selftext}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
 //  We could’ve used just 1 piece of state here – to store the input, 
 // and send the same value down to Reddit – 
 // but then the Reddit component would be fetching data with every keypress.
 //
  const [inputValue, setValue] = useState("reactjs");
  //useState is stateful. It only uses the initial state once, 
  //the first time it renders. After that it’s ignored. 
  // So it’s safe to pass a transient value, like a prop that might change or some other variable
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = event => {
    event.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
