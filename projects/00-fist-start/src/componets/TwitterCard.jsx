import { useState } from "react"
import { followButton, formatterUsername } from "../utils/utils"

// eslint-disable-next-line react/prop-types
function TwitterCard({ username, name, isFollowing = false }) {
  const [isFollowingValue, setIsFollowingValue] = useState(isFollowing)
  const imageSrc = `https://ui-avatars.com/api/?name=${username}`

  function handleFollowClick() {
    setIsFollowingValue(!isFollowingValue)
  }

  return (
    // BEM naming convention
    <article className="card"> 
      <div className="card__left">
        <img src={imageSrc} alt="Avatar" className="card__avatar" />
        <div className="card__text">
          <span className="card__name">{name}</span>
          <span className="card__arroba">{formatterUsername(username)}</span>
        </div>
      </div>
      <button className={!isFollowingValue ? 'card__button' : 'card__button-following'} onClick={handleFollowClick} data-hover="CLICK ME">{followButton(isFollowingValue)}</button>
    </article>
  )
}
export default TwitterCard
