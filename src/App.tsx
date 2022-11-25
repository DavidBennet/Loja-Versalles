import "./styles/main.css"
import { List, UserCircle } from "phosphor-react"
import LogoTransparente from "./assets/logoTransparente.png"
import { Post } from "./components/Post"
import { Links } from "./components/Links"
import { useState } from "react"
import { Modal } from "./components/Modal"


export function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return(
    <div>
      {/* <div id="header" className="flex justify-between items-center h-10 bg-neutral-400 rounded-md">
        <button className="m-4">
          <List size={24} color="#111111"/> 
        </button>

        <button className="m-4">
          <UserCircle size={24} color="#111111"/>
        </button>
      </div> */}

      <div id="logo" className="max-w-lg flex mx-auto my-16 bg-transparent items-center justify-center">
        <img src={LogoTransparente} className="rounded-full w-[430px]"/>  
      </div>

      
      <div id="section" className="grid grid-cols-3 gap-6 ml-20 mt-8">
        <div className="relative w-80 rounded">
          <Post 
            id="1" 
            image="/azul.png" 
            image2="/azul2.png" 
            name="Shorts Azul" 
            price="30R$" 
            key={1}          
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>

        <div className="relative w-80">
          <Post 
            id="2" 
            image="/azulmarinho.png" 
            image2="/azulmarinho2.png" 
            name="Shorts Azul Marinho" 
            price="30R$"
            key={2}          
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>
        
        <div className="relative w-80">
          <Post 
            id="2" 
            image="/azulmarinho.png" 
            image2="/azulmarinho2.png" 
            name="Shorts Azul Marinho" 
            price="30R$"
            key={2}          
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>
          
        <div className="relative w-80">
          <Post 
            id="3" 
            image="/branco.png" 
            image2="/branco2.png" 
            name="Shorts Branco" 
            price="30R$" 
            key={3}         
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div> 
        
        <div className="relative w-80">
          <Post 
            id="4" 
            image="/chumbo.png" 
            image2="/chumbo2.png" 
            name="Shorts Chumbo" 
            price="30R$" 
            key={4}          
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>
        
        <div className="relative w-80">
          <Post 
            id="5" 
            image="/diamantenegro.png" 
            image2="/diamantenegro2.png" 
            name="Shorts Diamante Negro" 
            price="30R$" 
            key={5}          
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>
        
        <div className="relative w-80">
          <Post 
            id="6" 
            image="/nevoa.png" 
            image2="/nevoa2.png" 
            name="Shorts Nevoa" 
            price="30R$" 
            key={6}          
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>
        
        <div className="relative w-80">
          <Post 
            id="7" 
            image="/tricolor.png" 
            image2="/tricolor2.png" 
            name="Shorts Tricolor" 
            price="30R$" 
            key={7}
          />
          <button 
            onClick={() => setIsModalVisible(true)}
            className="absolute bottom-0 right-0 font-extrabold text-red-500 w-40 h-12 rounded-sm hover:text-red-700 duration-200"
          >
            <Modal />
          </button>
          {isModalVisible ? <Modal /> : null}  
        </div>       
      </div>

      <footer>
        
        <div className="bg-neutral-500 rounded-sm h-36 mt-8 grid grid-cols-2">
          
          <div className="flex flex-col">
            
            <h1 className="font-black text-xl justify-center mx-auto mt-4 ">Nossas outras lojas</h1>
            
            <div className="mt-4 flex flex-row justify-center items-center">

              <Links 
                icon="./src/assets/mercadoLivre.png" 
                description="Link para nossa página no mercado livre" 
                adress="aaa" 
              />
              
              <Links 
                icon="./src/assets/shopee2.png"
                description="Link para nossa página na Shopee" 
                adress="bbb" 
              />
              
              <Links 
                icon="./src/assets/shein.png" 
                description="Link para nossa página na Shein" 
                adress="ccc" 
              />
              
            </div>
          
          </div>
          
          <div className="flex flex-col">          
            <h2 className="font-black text-xl justify-center mx-auto mt-4 ">Fale conosco!</h2>
            
            <div className="mt-4 flex flex-row justify-center items-center">

              <Links 
                icon="./src/assets/whatsApp.png" 
                description="Link para falar conosco via WahtsApp" 
                adress="ccc" 
              />              
              
            </div>
          
          </div>        
        </div>
      
      </footer>
    
    </div>
  )
}
             