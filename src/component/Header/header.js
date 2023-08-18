import React, { forwardRef, useState } from "react";
import Typed from "typed.js";
import "./header.sass";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const header = forwardRef((ref) => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      if (username) {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.status === 404) {
          alert("Benutzer existiert nicht.");
          return;
        }
        const userData = await response.json();

        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();

        dispatch(setUserData({ ...userData, repositories: reposData }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Geben Sie den Github-Login ein und</i>",
        "finden Sie Informationen zu Benutzern<!>",
      ],
      typeSpeed: 80,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div class="header">
      <div class="header-title-img">
        <img
          src="https://pngimg.com/d/github_PNG90.png"
          width="50"
          height="50"
          alt="github-icon"
          class="github-icon"
        />
        <h1 className="title" ref={el}></h1>
      </div>
      <div class="search-user">
        <input
          type="text"
          class="input-search"
          placeholder="Geben Sie den GitHub-Benutzernamen ein"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchData} class="button-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
});

export default header;
