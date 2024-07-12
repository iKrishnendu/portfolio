import React from "react";
import GitHubCalendar from "react-github-calendar";
function Github() {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          margin: "auto",
          width: "80%",
          paddingBottom: "30px",
        }}
      >
        <h1>Days I Code</h1>
        <GitHubCalendar
          username="iKrishnendu"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </>
  );
}

export default Github;
