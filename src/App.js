import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [product,setProduct] = useState([
  { 
    id:1,
    title:"Kingston Value Ram",
    image:"https://picsum.photos/id/24/4855/1803",
    info:"8GB 3200 MHz DDR4 SODIMM Ram",
    adet:1,
  },{
    id:2,
    title:"Hp Victus 16-S0017NT",
    image:"https://picsum.photos/id/29/4000/2670",
    info:"16.1 Inç Fhd 144Hz Taşınabilir Bilgisayar HP",
    adet:1,
  },{
    id:3,
    title:"Epson Ecotank L3252",
    image:"https://picsum.photos/id/18/2500/1667",
    info:"Renkli Tanklı Yazıcı Baskı-Tarama- Kopya",
    adet:1,
  },{
    id:4,
    title:"Dreame Bot L10",
    image:"https://picsum.photos/id/4/5000/3333",
    info:"Pro Akıllı Robot Süpürge",
    adet:1,
  }
  ])
  const [basket, setBasket] = useState([])
  return (
    <div className="App">
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setBasket(arr);
                } else {
                  arr.forEach((item) => {
                    if (item.id === eleman.id) {
                      eleman.adet += 1;
                    }
                    setBasket(arr);
                  });
                }

                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              image={eleman.image}
              info={eleman.info}
            />
          );
        })}
      </div>
      <div className="sepet">
        <h2>SEPET</h2>
        <ul className="sepet">
          {basket.map((eleman, index) => {
            return (
              <li>
                {eleman.title +
                  " -----> " +
                  eleman.info +
                  "   -----> Adet : "}
                   {" "}
                   <b style={{fontSize:"20px",color:"blue"}}>{eleman.adet}</b>
                
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button className="buton" onClick={() => {
            setBasket([]);
          }}>Sepeti Temizle</button>
        ) : (
          <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
