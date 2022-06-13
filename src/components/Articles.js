import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./Article";
// import Spinner from "./Spinner";

function Articles() {
  const [items, setItems] = useState([]);
  
  // const [loading, setLoading] = useState(true);
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setItems(data));
      // setLoading(false);
  }, []);

  // let output = <Spinner/>;
  // if (!loading) {
  //   output = articles
  //   .slice(0,5)
  //   .map(article => <Article {...items}/>)
  // }
  return (
    <div>
      {items.map((item) => (
        <Article {...item} />
      ))}
    </div>
  );
}

export default Articles;
