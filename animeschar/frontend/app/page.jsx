import Image from "next/image"
import SearchInput from "../components/SearchInput"

export default function Home() {
  return(
    <div>
      {/* logo */}
      <section>
      <h1>Search a Anime character</h1>
      <SearchInput />
      </section>

    </div>
  )
}
