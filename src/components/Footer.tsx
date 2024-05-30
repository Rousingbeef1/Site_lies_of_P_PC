import Image from 'next/image'

export default function Footer() {
    const logoInsta = require('../../public/assets/icons/instagram.png')
    const logoX = require('../../public/assets/icons/twitter_x_new_logo_square_x_icon_256075.png')
    const logoReedit = require('../../public/assets/icons/Redit.png')
    const logoYoutube = require('../../public/assets/icons/youtube.png')
    const logoFace = require('../../public/assets/icons/facebook.png')
    const logoRound8 = require('../../public/assets/store_logos/roundstudio.png')
    const logoFaixaEtaria = require('../../public/assets/icons/faixa-etaria_16.png')

    return (
        <div className='flex flex-col justify-start items-center gap-2'>
            <div className='flex justify-center mt-4 gap-3'>
                <Image src={logoInsta} alt='logo instagram' width={50} height={50} />
                <Image src={logoX} alt='logo X' width={50} height={50} />
                <Image src={logoReedit} alt='logo Reedit' width={50} height={50} />
                <Image src={logoYoutube} alt='logo Youtube' width={50} height={50} />
                <Image src={logoFace} alt='logo Facebook' width={50} height={50} />
            </div>

            <Image src={logoRound8} alt='logo Round8 studios'/>

            <p>Copyright © 2014~2023 | All Rights Reserved</p>

            <p>Todos os direitos são das respectivas marcas e o produto não possui interesse comercial</p>

            <div className='flex justify-start bg-[#212121] gap-4 p-4 mb-4 rounded-lg'>
                <Image src={logoFaixaEtaria} alt='Faixa etária recomendada de 16 anos' width={80} height={80}/> 
                    <label htmlFor="">Violência sexual <br /> Linguagem imprópria <br /> Compras online</label>
            </div>
        </div>
    )
}