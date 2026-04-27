import Link from "next/link"

export const Menu = () => {
    return (
        <div className="bg-blue-700 text-white p-4 w-full">
            <div className="max-w-6xl mx-auto flex items-center">
                <h2 className="text-xl font-bold">
                    <Link href="/">SADRACK</Link>
                     </h2>
                     <ul className="flex space-x-6 ml-5">
                        <li>
                        <Link href="/users/list" className="hover:text-gray-400"> Usuarios </Link>
                        </li>
                        <li  className="hover:text-gray-400">
                        <Link href="#"> Sair </Link>
                        </li>
                     </ul>
            </div>
        </div>
    )
}