
import { GitHubIcon, InstagramIcon, LinkedInIcon, YoutTubeIcon } from "@/components/social-icons";
import Image from "next/image";
import Link from "next/link";

function SocialLink({ icon: Icon, ...props}: any){
    return(
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}
export default function  AboutSection (){
    return(
        <section id="about" className="container flex md:max-w[64rem] flex-col md:py-12 lg:py-24">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
                <div className="lg:pl-20 flex justify-center">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image 
                            src='/avatar.jpg'
                            alt='Liliam Yamada'
                            width={800}
                            height={800}
                            quality='95'
                            priority={true}
                            className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
                        />

                    </div>
                    
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start">
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
                            @liliamyamada
                        </h1>
                        <p className="mt-6 text-base text-muted-foreground">
                            Transição de carreira recente para área de denvolvimento Web, atualmente como desenvolvedor front-end no Grupo 2MI, responsável na produção de páginas web de uma plataforma de investimentos financeiros. 

                            Interesse em desenvolver sistemas web intuitivas que possar melhorar a performace das empresas e os usuários da plataforma.
                            Era CEO da Móveis Megumi - compra e venda de móveis usados por 6 anos, atuação principal em vendas B2C, atendimento e administração.

                            Doutora em Química formada na USP em 2018 com bolsa CAPES. Experiência em pesquisa de síntese de nanomateriais e nanopartículas com controle de forma, um dos artigos foi escolhido como capa pela revista ChemNanoMat em 2016 com o título Bimetallic Au@Pd-Au Tadpole-Shaped Asymmetric Nanostructures by a Combination of Precursor Reduction and Ostwald Ripening.
                        </p>
                        <div className="mt-6 flex  justify-center md:justify-start gap-6">
                            <SocialLink href="" icon={InstagramIcon}/>
                            <SocialLink href="https://github.com/LiliKaori" icon={GitHubIcon}/>
                            <SocialLink href="https://www.linkedin.com/in/liliam-yamada/" icon={LinkedInIcon}/>
                            <SocialLink href="" icon={YoutTubeIcon}/>
                        </div>
                    </div>

            </div>
        </section> 
    )
}