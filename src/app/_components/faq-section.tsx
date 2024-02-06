import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection (){
    return(
        <section id="faq"
            className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24"
        >
            <div className="mx-auto flex flex-col max-x-[58rem] items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    FAQ
                </h2>
                
            </div>
            <div className="mx-auto text-center md:max-w[58rem]">
                <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4">
                    Iremos desenvolver uma plataforma LMS (Learning Management System), utilizando Next.js 14 e as melhores tecnologias do mercado. Veja o conteúdo abaixo...
                </p>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                        
                    </AccordionItem>
                    <AccordionItem value="item-2">
                    <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                    <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                    <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                    <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                    <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                    <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
                        <AccordionContent className="text-left">Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.

                            Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
                        </AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
            </div>
        </section>
    )
}