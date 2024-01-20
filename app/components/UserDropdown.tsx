
interface Session {
  userName: string,
  userEmail: string,
  userAvatarUrl: string
} 

const UserDropdown = ( sessionData : Session ) => {
  return (
    <>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} className="avatar mr-5 hover:cursor-pointer">
                <div
                  tabIndex={0}
                  className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                >
                  <img src={sessionData.userAvatarUrl!} alt="User Avatar" />
                </div>
              </div>
              <div className="dropdown-content card card-compact w-64 p2 shadow bg-secondary">
                <div className="card-body">
                  <div className="card-title">
                    Willkommen, {sessionData.userName}
                  </div>
                  <div className="card-content">
                    <p>Aktuell angemeldet als:</p>
                    <p>{sessionData.userName}</p>
                    <p>{sessionData.userEmail}</p>
                    <p>via Google</p>
                  </div>
                </div>
              </div>
            </div>
          </>
  )
}

export default UserDropdown