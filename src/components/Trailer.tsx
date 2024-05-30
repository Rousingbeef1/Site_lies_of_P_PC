'use client'
import Image from "next/image"
import ReactPlayer from "react-player"
import Steam from "../../public/assets/store_logos/steam.png"
import Gog from "../../public/assets/store_logos/gog.png"
import Ps4 from "../../public/assets/store_logos/ps4.png"


export default function Trailer() {

    const steamlogo = require('../../public/assets/store_logos/steam.png')
    const goglogo = require('../../public/assets/store_logos/gog.png')
    const humblelogo = require('../../public/assets/store_logos/humble.png')
    const nintendologo = require('../../public/assets/store_logos/nintendo.png')
    const xboxlogo = require('../../public/assets/store_logos/XboxGamePass_2020_stack_Grn_RGB+50p.png')
    const ps4logo = require('../../public/assets/store_logos/ps4.png')

    return (

        <div className=" relative flex flex-col justify-start items-center gap-10 max-w-[1200px] h-[1400px] mx-auto bg-[#181818] p-4">

            <h2 className="text-[48px] text-center mt-14">Trailer</h2>

            <ReactPlayer className="" url={"https://www.youtube.com/watch?v=R5TUYKAzGZs&t=7s&pp=ygURdHJhaWxlciBsaWVzIG9mIHA%3D"} controls={true} playing={false} loop={false} width={"100%"} height={"50%"} muted={true} config={{
                file: {
                    attributes: {
                        style: {
                            objectFit: 'cover',
                        },
                    },
                },
            }}>

            </ReactPlayer>

            <div className="flex flex-wrap gap-3 min-w-full m-auto">
                <Image className="w-[376px] h-[162px]" alt='logosteam' src={steamlogo} />
                <Image alt='logogog' src={goglogo} />
                <Image alt='logosteam' src={humblelogo} />
                <Image alt='logosteam' src={nintendologo} />
                <div className="w-[376px] h-[162px]">
                    <Image alt='logosteam' src={xboxlogo} />
                </div>
                <Image alt='logosteam' src={ps4logo} />
            </div>





        </div>

    )
}