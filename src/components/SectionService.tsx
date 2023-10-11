import Image from "next/image"
import { Container } from "./Container";

import PhoneIncon from "@/assets/icon-phone.svg"
import SoluctionsIcons from "@/assets/icon-solutions.svg"
import OptionsIncon from "@/assets/icon-options.svg"
import CardIncon from "@/assets/icon-card.svg"

import imagePhone from "@/assets/phone.png"
export function SectionServices(){
    return( 
        <section className="relative w-full h-[956px] ">
            <Container>
              <div className=" flex-1 max-w-[594px] pt-32">
                <span className=" block text-primary-orage text-sm font-bold upcasse mb-9">servico exclusivos</span>
                <h2 className="text-primary-gray text-[56px] font-bold leading-tight
                mb-6">Gerencie sua financas sem sair de casa</h2>
                <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como voce cuidar das suas financas pelo app itau
                de forma segura, rapida e o melhor, no conforto da sua casa.</p>
                <ul className="flex flex-col items-start gap-9">
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex">
                            <Image 
                            src={PhoneIncon}
                            alt="icon"
                            />
                        </div>
                    <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferencia e pagamentos de 
                        onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex">
                            <Image 
                            src={SoluctionsIcons}
                            alt="icon"
                            />
                        </div>
                    <p className="flex-1 text-txt-gray pr-2">Solucoes de emprestimos e renegociacoes suas financas</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex">
                            <Image 
                            src={OptionsIncon}
                            alt="icon"
                            />
                        </div>
                    <p className="flex-1 text-txt-gray pr-2">Diversas opcoes de investimento, de acordo com ser perfil de investidor</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9">
                        <div className="w-7 h-7 flex">
                            <Image 
                            src={CardIncon}
                            alt="icon"
                            />
                        </div>
                    <p className="flex-1 text-txt-gray pr-2">Acompanha a fatura do seu cartap de credito e faca compras onlines com seu cartao virtual</p>
                    </li>
                </ul>
                </div>  
            </Container>
            <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
                <Image 
                src={imagePhone}
                alt="phone"
                className="translate-x-[-50%]"
                />
            </div>
        </section>
    
    )
}
