import React from "react";


function Api() {
  const [data, setData] = React.useState(null);
  console.log("data",data)

  React.useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default Api;