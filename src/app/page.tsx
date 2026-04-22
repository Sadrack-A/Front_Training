import Link from "next/link";


export default function Home() {
  return (
    <div >
Bem vindo sadrack <br/>
<Link href = "/users/list"> Usuários </Link>
    </div>
  );
}
