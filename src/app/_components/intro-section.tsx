
import { ModeToggle } from '../_components/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function IntroSection (){
    return(
        <section id="intro" className='space-y-6 px-8 md:py-12 lg:py-32 relative'>
        <svg viewBox="0 0 1024 1024" className="absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg>
        <div className='container flex max-w[64rem] flex-col items-center text-center gap-4'>
          <span className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center'>
            1ª Turma dia 06 de novembro de 2023
            <ModeToggle />
          </span>
          <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
            The Next Dev
            <br />
            Full-stack <span className='text-primary'>Next.js 14</span>
          </h1>
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Invista na sua carreira e aprenda a desenvolver aplicações que as grandes empresas estão utilizando. Faça parte da próxima turma da formação mais completa de Next.js 14.
          </p>
          <div className='space-x-4'>
            <a href='#investment' className='bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold'>Quero fazer parte</a>
            <a href='#feature' className={cn(buttonVariants({variant: 'outline', size: 'lg'}))}>Saiba mais</a>
          </div>
        </div>        
      </section>
    )
}