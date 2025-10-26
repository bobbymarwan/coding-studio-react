import { useParams } from "react-router-dom";

type User = {
    nama: string
    umur: string
}

const users: Record<string, User> = {
  "1": {
    nama: "Andi",
    umur: "25",
  },
  "2": {
    nama: "Siti",
    umur: "29",
  },
}

function About() {
  const {id} = useParams<{id: string}>()
  const user = id ? users[id] : undefined

  return (
    <div>
      <img src="https://placehold.co/600x400" />
      <h1>INI HALAMAN ABOUT {user?.nama}. Aku berumur {user?.umur}</h1>
    </div>
  )
}

export default About;
