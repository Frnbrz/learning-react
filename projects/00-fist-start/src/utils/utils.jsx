export function formatterUsername(username) {
  return `@${username}`
}

export function followButton(isFollowing) {
  return isFollowing ? "Siguiendo" : "Seguir"
}