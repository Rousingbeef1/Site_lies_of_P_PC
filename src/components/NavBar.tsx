import Image from "next/image"

export default function NavBar() {
    const logo = require('../../public/assets/icons/logojogo.png')
    return (
        <div className="flex flex-row w-screen bg-[#00000099] justify-between items-center fixed z-10" >

            <div className="">
                <Image className="ml-16" src={logo} width={140} height={30} alt="logo" />
            </div>

            <div>
                <ul className="flex flex-row mr-24 gap-10 font-['Eb_Garamond'] text-3xl">
                    <li className="border-b-2 border-[#00000000] hover:border-[#85261e]" >
                        <a href="#">Game</a>
                    </li>
                    <li className="border-b-2 border-[#00000000] hover:border-[#85261e]">
                        <a href="#">Protagonista</a>
                    </li>
                    <li className="border-b-2 border-[#00000000] hover:border-[#85261e]">
                        <a href="#">Gameplay</a>
                    </li>
                    <li className="border-b-2 border-[#00000000] hover:border-[#85261e]">
                        <a href="#">Sobre</a>
                    </li>
                </ul>
            </div>

        </div>

    )
}