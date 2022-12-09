
interface modalProps {
    store: string;
    image: string;
    store2?: string;
    image2?: string;
    store3?: string;
    image3?: string;
    contact: "https://web.whatsApp.com/send?phone=+55 81 9384-0074";
}

export function Modal(props: modalProps) {
    return(
        <div>
            <h2>Escolha uma de nossas lojas</h2>
            
            <li>
                <button>
                    <a href={props.store} target="_blank">
                        <img src={props.image} alt="Nossa loja na Shopee" />
                    </a>
                </button>
            </li>

            <li>
                <button>
                    <a href={props.store2} target="_blank">
                        <img src={props.image2} alt="Nossa loja no Mercado Livre" />
                    </a>
                </button>
            </li>

            <li>
                <button>
                    <a href={props.store3} target="_blank">
                        <img src={props.image3} alt="Nossa loja na Shein" />
                    </a>
                </button>
            </li>
            
            <li>
                <button>
                    <a href={props.contact} target="_blank">
                        <img src={props.image3} alt="Nossa loja na Shein" />
                    </a>
                </button>
            </li>
        </div>
    )
}