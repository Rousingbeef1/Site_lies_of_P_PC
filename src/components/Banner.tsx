'use client'
import Image from "next/image"
import ReactPlayer from "react-player"

export default function Banner() {
    const logo = require('../../public/assets/icons/lies-of-p-logo-3 1.svg')


    return (

        <div className=" relative flex justify-start item-center w-screen h-auto">

            <ReactPlayer className="relative -z-10" url={"/assets/backgrounds/videos/banner.mp4"} controls={false} playing={true} loop={true} width={"auto"} height={"auto"} muted={true} config={{
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
          
            
           

        </div>

    )
}