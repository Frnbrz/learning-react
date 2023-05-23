import TwitterCard from "../componets/TwitterCard"

function App() {
  return (
    <main className="App">
      <TwitterCard username="JoseCarlos" name="Jose" isFollowing />
      <TwitterCard username="MariaJomez" name="Maria" />
      <TwitterCard username="NobleSanto" name="NB" />
      <TwitterCard username="JoseCarlos" name="Jose" />
    </main>
  )
}
export default App