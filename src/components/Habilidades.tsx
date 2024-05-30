'use client'
import { url } from "inspector"
import Image from "next/image"
import ReactPlayer from "react-player"

export default function Habilidades() {
    const logo = require('../../public/assets/icons/lies-of-p-logo-3 1.svg')

    return (

        <div className=" flex flex-wrap justify-between item-center w-screen h-auto bg-[url('/assets/backgrounds/lies-of-p-cover-art-3840x2160-12947.png')] bg-center bg-cover">

            <div className=" max-w-[1200px] mx-auto flex flex-wrap justify-between p-8 ">

                <div className="bg-[#212121] w-[409px] h-[390px] text-center relative flex flex-col items-center mb-[8%] ">

                    <h2 className=" my-3 text-[30px] border-b-4 border-[#85261e] w-[100px]">Parry</h2>

                    <div className="flex w-auto justify-center ">

                        <ReactPlayer className="" url={"https://www.youtube.com/watch?v=o0xxOfdQWfw"} controls={true} playing={false} loop={false} width={"300px"} height={"190px"} muted={true} config={{
                            file: {
                                attributes: {
                                    style: {
                                        objectFit: 'cover',
                                    },
                                },
                            },
                        }}>

                        </ReactPlayer>
                    </div>
                    <p className="absolute bottom-[10%] mx-11 text-start">
                        Se o bloqueio logo antes de um ataque for bem sucedido, ele ativará uma defesa perfeita fazendo com que P não receba dano e tenha seu vigor consumido.
                    </p>

                </div>


                <div className="bg-[#212121] w-[409px] h-[390px] text-center relative flex flex-col items-center ">

                    <h2 className=" my-3 text-[30px] border-b-4 border-[#85261e] w-[fit-content]">Arte das fábulas</h2>

                    <div className="flex w-auto justify-center ">

                        <ReactPlayer className="" url={"https://www.youtube.com/watch?v=TR_KDH6R3vo"} controls={true} playing={false} loop={false} width={"300px"} height={"190px"} muted={true} config={{
                            file: {
                                attributes: {
                                    style: {
                                        objectFit: 'cover',
                                    },
                                },
                            },
                        }}>

                        </ReactPlayer>
                    </div>
                    <p className="absolute bottom-[10%] mx-11 text-start">
                        Se o bloqueio logo antes de um ataque for bem sucedido, ele ativará uma defesa perfeita fazendo com que P não receba dano e tenha seu vigor consumido.
                    </p>

                </div>


                <div className="bg-[#212121] w-[409px] h-[390px] text-center relative flex flex-col items-center ">

                    <h2 className=" my-3 text-[30px] border-b-4 border-[#85261e] w-[fit-content]">Ataque letal</h2>

                    <div className="flex w-auto justify-center ">

                        <ReactPlayer className="" url={"https://www.youtube.com/watch?v=7icqAHHDkhU"} controls={true} playing={false} loop={false} width={"300px"} height={"190px"} muted={true} config={{
                            file: {
                                attributes: {
                                    style: {
                                        objectFit: 'cover',
                                    },
                                },
                            },
                        }}>

                        </ReactPlayer>
                    </div>
                    <p className="absolute bottom-[10%] mx-11 text-start">
                        Se o bloqueio logo antes de um ataque for bem sucedido, ele ativará uma defesa perfeita fazendo com que P não receba dano e tenha seu vigor consumido.
                    </p>

                </div>

                <div className="bg-[#212121] w-[409px] h-[390px] text-center relative flex flex-col items-center ">

                    <h2 className=" my-3 text-[30px] border-b-4 border-[#85261e] w-[fit-content]">Braço legionário</h2>

                    <div className="flex w-auto justify-center ">

                        <ReactPlayer className="" url={"https://www.youtube.com/watch?v=7WxVquEmx7U"} controls={true} playing={false} loop={false} width={"300px"} height={"190px"} muted={true} config={{
                            file: {
                                attributes: {
                                    style: {
                                        objectFit: 'cover',
                                    },
                                },
                            },
                        }}>

                        </ReactPlayer>
                    </div>
                    <p className="absolute bottom-[10%] mx-11 text-start">
                        Se o bloqueio logo antes de um ataque for bem sucedido, ele ativará uma defesa perfeita fazendo com que P não receba dano e tenha seu vigor consumido.
                    </p>

                </div>


            </div>


        </div>

    )
}