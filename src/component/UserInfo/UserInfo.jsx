import React from "react";
import { useSelector } from "react-redux";
import "./UserInfo.scss"
import { Link } from "react-router-dom";

const UserInfo = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div>
      {userData && (
        <div class="users_info">
          <div>
            <img
              src={userData.avatar_url}
              width="260"
              height="260"
              className="profile_img"
              alt="profile_img"
            />
            <h2>{userData.name}</h2>
            <p className="login">{userData.login}</p>
            <p className="followers">
              <svg height="16" width="16">
                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
              </svg>
              {userData.followers} followers · {userData.following} following
            </p>
          </div>
          
          <div>
            <h3 className="repo-title">Repositories:</h3>
            <p className="repo-count">Öffentliche Repositories: {userData.public_repos}</p>
            <div class="repositories-grid">
              {userData.repositories &&
                userData.repositories.map((repo) => (
                  <p className="repo" key={repo.id}>
                    <Link to={`https://github.com/Erkinai31/${repo.name}`} className="repo-name" target="_blank" rel="noopener noreferrer">{repo.name} </Link>
                    <p className="repo-description">{repo.description} </p>
                   <div className="repo-language"><div className="repo-language-color"></div>
                    {repo.language}
                    </div>
                  
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
