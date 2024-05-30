import Image from "next/image";
import Hotel from "../../public/assets/backgrounds/Krat.jpeg"

export default function Historia() {
    const hotel = require('../../public/assets/backgrounds/Krat.jpeg')
    return (
        <div className="flex justify-center bg-[url(/assets/backgrounds/lies-of-p-death-screen.png)] bg-no-repeat bg-cover bg-center p-10">
            <div className=" h-auto w-screen text-center flex flex-col justify-start items-center">

                <h2 className="text-[40px] ">História</h2>
                <div className=" flex justify-between items-center  w-screen h-auto mx-auto max-h-[700px] gap-[20%] p-5">

                     
                        <p className="ml-4 text-start w-[40%] p-5 h-auto text-[24px] bg-[#181818cc] max-w-[800px]">"Lies of P" se passa em uma cidade fictícia chamada Krat, que possui uma atmosfera gótica e steampunk. A história acompanha P, uma versão mais madura e sombria do personagem Pinóquio, em sua busca para encontrar seu criador, Geppetto, e se tornar humano. Ao longo do jogo, P enfrenta diversos inimigos mecânicos e criaturas bizarras, descobrindo segredos obscuros sobre sua existência e o mundo ao seu redor.</p>
                    

                    <div className="flex items-center w-[40%] h-auto bg-[] ">
                        <Image src={hotel} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}