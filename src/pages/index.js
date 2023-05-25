import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Work from "./components/Work"
import About from "./components/About"
import SendMessage from "./components/SendMessage"
import Fotter from "./components/Fotter"

export default function Home() {
  return (
    <main>

      {/* Nav bar */}
      <Navbar />

      {/* Contact */}
      <Contact />

      {/* Works */}
      <Work />

      {/* About */}
      <About />

      {/* Send message */}
      <SendMessage />

      {/* Fotter */}
      <Fotter />

    </main>
  )
}
