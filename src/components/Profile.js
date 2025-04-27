function Profile({ user }) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-6">
          <img src={user.avatar_url} alt="avatar" className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-blue-500">@{user.login}</p>
            <p className="mt-2">{user.bio || "No bio available"}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center mt-6">
          <div>
            <p className="font-bold">{user.public_repos}</p>
            <p>Repos</p>
          </div>
          <div>
            <p className="font-bold">{user.followers}</p>
            <p>Followers</p>
          </div>
          <div>
            <p className="font-bold">{user.following}</p>
            <p>Following</p>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <p><strong>Location:</strong> {user.location || "Not available"}</p>
          <p><strong>GitHub:</strong> <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">View Profile</a></p>
        </div>
      </div>
    );
  }
  
  export default Profile;
  