'use client'

import { useForm } from 'react-hook-form'
import InputMask, { ReactInputMask } from 'react-input-mask'
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useState } from 'react'
import { saveLead } from '../actions'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Confetti from 'react-dom-confetti'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
    name: z.string().min(2, {message: 'Nome deve conter ao menos 2 caracteres.'}),
    email: z.string().email({message: 'Email inválido.'}),
    phoneNumber: z.string(). min(15, {message: 'Telefone não é válido.'}).refine(
        (value)=>{
            
            const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
            return regex.test(value)
        },
        {message: 'Número de telefone inválido'}
    )
})

type FormType = z.infer<typeof formSchema>

export default function PreEnrollment (){
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
        }
    })

    const [isCompleted, setCompleted] = useState(false)

    const onSubmit = async (values: FormType)=>{
        setCompleted(true)
        await saveLead({name:values.name, email: values.email, phoneNumber: values.phoneNumber })
    }
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="lg"
                    className='bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
                >
                    Lista de espera
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Confetti active={isCompleted} config={{
                    spread:90,
                    elementCount: 200
                }}/>
                {
                    isCompleted? (
                        <>
                        <DialogHeader>
                            <DialogTitle>Parabéns!</DialogTitle>
                            <DialogDescription>
                                Suas informações foram enviadas para lista de espera. Aguarde que entraremos em contato.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogClose>
                            <Button variant='outline' onClick={()=>{
                                setCompleted(false)
                                form.reset()
                            }}>
                                Fechar
                            </Button>
                        </DialogClose>
                        </>
                    ):(
                        <>
                            <DialogHeader>
                                <DialogTitle>Parabéns!</DialogTitle>
                                <DialogDescription>
                                    Suas informações foram enviadas para lista de espera. Aguarde que entraremos em contato.
                                </DialogDescription>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                                <FormField
                                    control={form.control}
                                    name='name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Nome...' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Seu melhor e-mail...' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                <FormField
                                    control={form.control}
                                    name='phoneNumber'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Celular</FormLabel>
                                            <FormControl>
                                                <InputMask
                                                className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                                                mask='(99) 99999-9999'
                                                placeholder='(00) 00000-0000'
                                                {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                    <Button type='submit'>Enviar</Button>
                                </form>
                            </Form>
                        </>
                    )
                }
            </DialogContent>
        </Dialog>
        
    )
}