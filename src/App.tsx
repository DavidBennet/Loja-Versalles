import "./styles/global.css"
import { List, UserCircle } from "phosphor-react"
import LogoTransparente from "./assets/logoTransparente.png"
import { Post } from "./components/Post"
import { Links } from "./components/Links"
import { useState } from "react"
import { Modal } from "./components/Modal"


export function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return(
    <div className="w-auto h-auto font-Lobster overscroll-none">
      {/* <div id="header" className="flex justify-between items-center h-10 bg-neutral-400 rounded-md">
        <button className="m-4">
          <List size={24} color="#111111"/> 
        </button>

        <button className="m-4">
          <UserCircle size={24} color="#111111"/>
        </button>
      </div> */}

      <div id="logo" className="max-w-lg flex mx-auto my-16 bg-transparent items-center justify-center ">
        <img src={LogoTransparente} className="rounded-full lg:w-96 lg:h-96 md:w-80 md:h-80 sm:w-60 sm:h-60 "/>  
      </div>

      
      <div id="section" className="gap-2 m-0 mt-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-col">
        <div className="flex m-auto rounded">
          <Post 
            id="1" 
            image="/azul.png" 
            image2="/azul2.png" 
            name="Shorts Azul" 
            price="30R$" 
            key={1}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"       
          />                  
         
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}   */}
        </div>

        <div className="flex m-auto rounded">
          <Post 
            id="2" 
            image="/azulmarinho.png" 
            image2="/azulmarinho2.png" 
            name="Shorts Azul Marinho" 
            price="30R$"
            key={2}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Masculina-C-3-Bolso-Premium-Azul-Marinho-i.626017141.21250903622"          
          />
          
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}  */}
        </div>
          
        <div className="flex m-auto rounded">
          <Post 
            id="3" 
            image="/branco.png" 
            image2="/branco2.png" 
            name="Shorts Branco" 
            price="30R$" 
            key={3}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Branco-reveillon-i.626017141.17986699750?xptdk=ade0ac9e-d5b3-4042-8a75-75e5c9b75e66"         
          />
          
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}   */}
        </div> 
        
        <div className="flex m-auto rounded">
          <Post 
            id="4" 
            image="/chumbo.png" 
            image2="/chumbo2.png" 
            name="Shorts Chumbo" 
            price="30R$" 
            key={4}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Masculina-C-3-Bolso-Premium-Chumbo-i.626017141.18951172662?sp_atk=2b8b77e2-6272-44ef-85bf-3c7d9dd35a1a&xptdk=2b8b77e2-6272-44ef-85bf-3c7d9dd35a1a"          
          />
          
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}   */}
        </div>
        
        <div className="flex m-auto rounded">
          <Post 
            id="5" 
            image="/diamantenegro.png" 
            image2="/diamantenegro2.png" 
            name="S. Diamante Negro" 
            price="30R$" 
            key={5}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Masculina-C-3-Bolso-Premium-Diamante-Negro-i.626017141.18050874389?sp_atk=309e0008-9717-4247-84e7-b9a19519e9dd&xptdk=309e0008-9717-4247-84e7-b9a19519e9dd"          
          />
          
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}   */}
        </div>
        
        <div className="flex m-auto rounded">
          <Post 
            id="6" 
            image="/nevoa.png" 
            image2="/nevoa2.png" 
            name="Shorts Nevoa" 
            price="30R$" 
            key={6}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Masculina-C-3-Bolso-Premium-Branco-N%C3%A9voa-i.626017141.21750904019"          
          />
          
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}   */}
        </div>
        
        <div className="flex m-auto rounded">
          <Post 
            id="7" 
            image="/tricolor.png" 
            image2="/tricolor2.png" 
            name="Shorts Tricolor" 
            price="30R$" 
            key={7}
            urlStore="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Tricolor-i.626017141.19951174032?sp_atk=fab12162-9beb-40de-a824-0e8cc7593b59&xptdk=fab12162-9beb-40de-a824-0e8cc7593b59"
          />
          
          {/* {isModalVisible ? 
            <Modal 
              store="https://shopee.com.br/Bermuda-Moletom-Premium-C-3-Bolso-Azul-i.626017141.10498155569?xptdk=21e614b5-c182-4d88-85d7-e4839e407eaf"
              image="./src/assets/Shopee.png"
              contact="https://web.whatsApp.com/send?phone=+55 81 9384-0074"
            /> 
          : null}   */}
        </div>       
      </div>

      <footer>
        
        <div className="bg-neutral-50 rounded-sm h-36 mt-8 grid grid-cols-2">
          
          <div className="flex flex-col sm:w-96 sm:ml-4 md:w-96 md:m-0 lg:w-[512px] xl:w-[620px] xl:ml-10">
            
            <h2 className="font-black text-xl justify-center mx-auto mt-4 xl:text-3xl lg:text-2xl">Nossas outras lojas</h2>
            
            <div className="mx-auto my-auto flex flex-row justify-center items-center gap-12 sm:gap-8 lg:gap-12 xl:gap-16">

              <Links 
                icon="./src/assets/mercadolivre1.png" 
                description="Link para nossa página no mercado livre" 
                adress="aaa"                 
              />
              
              <Links 
                icon="./src/assets/shopeeTransp-500.png"
                description="Link para nossa página na Shopee" 
                adress="bbb"           
              />
              
              <Links 
                icon="./src/assets/sheinTransp-500.png" 
                description="Link para nossa página na Shein" 
                adress="ccc"                
              />
              
            </div>
          
          </div>
          
          <div className="flex flex-col sm:w-60 sm:ml-10 md:w-96 md:m-0 lg:w-[512px] xl:w-[620px] xl:mr-10">          
            <h2 className="font-black text-xl justify-center mx-auto mt-4 lg:text-2xl xl:text-3xl">Fale conosco!</h2>
            
            <div className="w-16 h-16  flex mx-auto my-auto justify-center items-center xl:w-16 lg:w-12 lg:h-16 sm:w-8 sm:h-16 ">

              <Links 
                icon="./src/assets/whatsapp-500.png" 
                description="Link para falar conosco via WhatsApp" 
                adress="ccc"                
              />              
              
            </div>
          
          </div>        
        </div>
      
      </footer>
    
    </div>
  )
}
             