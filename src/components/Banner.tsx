'use client'
import Image from "next/image"
import { useState } from "react"
import ReactPlayer from "react-player"


export default function Banner() {
    const logo = require('../../public/assets/icons/lies-of-p-logo-3 1.svg')
    const musica = require('../../public/assets/buttons/onoof.svg')
    const pausado = require('../../public/assets/buttons/pausado.svg')
    const [mutado,setMutado]=useState(true)
    const [rodaVideo, setRodavideo] = useState(true)

    let alteraSom= ()=>{
      setMutado(!mutado)
    }
    
    let pausavideo = ()=>{
      setRodavideo(!rodaVideo)
    }

    return (

        <div className=" relative flex justify-start item-center w-screen h-auto">

            <ReactPlayer className="relative -z-10" url={"/assets/backgrounds/videos/banner.mp4"} controls={false} playing={rodaVideo} loop={true} width={"auto"} height={"auto"} muted={true} config={{
            file: {
              attributes: {
                style: {
                  objectFit: 'cover',
                },
              },
            },
          }}>
        
            </ReactPlayer>
            <div className="text-white z-10 absolute top-[22%] left-[12%] max-w-72">
            <h1 className="mb-4 text-[32px]">O que é?</h1>
            <p className="text-[20px]">Lies of P é o mais novo jogo eletrônico de RPG de Souslike desenvolvido pela Round8 Studio e publicado pela Neowiz Games,
                inspirado no romance de Carlo Collodi: As Aventuras de Pinóquio. Explore o mundo, desvende mistérios e descubra o que aconteceu com a revolucionária cidade de Krat.</p>
            </div>
          
            <button className="absolute top-28 right-56 "onClick={alteraSom}>
            <Image src={pausado} width={30} height={30} alt="pausado"/>

            </button>
            <ReactPlayer url='/assets/audio/musicatema.mp3' ClassName='hidden' playing={mutado} muted={false} controls={false} width={0} height={0} />

            <button  className=" absolute top-[118px] right-28"onClick={pausavideo}>
            <Image src={musica} width={45} height={50} alt="mute"/>

            </button>
            

        </div>

    );
}