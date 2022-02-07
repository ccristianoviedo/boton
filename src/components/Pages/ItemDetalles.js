import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";
import './ItemDetalles.css'
import { useNavigate } from "react-router-dom";



const ItemDetalles=()=> {
  const { productosId }=  useParams()
  const [product, setProduct] = useState();
  let navigate1 = useNavigate()
  const IrAProductos=()=>{
   navigate1("/Productos")
  };

  let navigate2 = useNavigate()
  const IrAComprar=()=>{
   navigate2("/Cart")
  };

  const [counter, setCounter] = useState(1);    
    
    const contar = () => {
      setCounter(counter + 1);
      
    }
    const restar = () => {
      setCounter(counter - 1);    
    }
    const reset = () =>  {
      setCounter (0);
    }

  useEffect(()=>{
      const URL = `http://localhost:3001/productos/${productosId}`;
      fetch(URL).then((res)=> res.json())
                .then((data)=> setProduct(data));

  },[]);
  if(product){  
        return (
        <div>  
            <header className="App-header1">
              <h1>VINOTECA OVIEDO</h1>
              <Navbar />  
            </header>
            <div className="itemDetallCont">
              <div className="itemIndividual1">
                    <h3>{product.producto}</h3>
                    <img src={product.img} alt={product.productos} className='img1'/>           
                    <p>Precio: ${product.precio}</p>
                    <h5>Stock:{product.stock}</h5>
                    <input type="submit" min="1" value={counter} />
                    <button onClick={IrAProductos}className="btn btn-info">VOLVER</button>
                    <button onClick={IrAComprar}className="btn btn-info">COMPRAR</button>
              </div>
              <div className="itemIndividual2">
                <h3>{product.producto}</h3>          
                <p>Precio: ${product.precio}</p>
                <h5>Stock:{product.stock}</h5>
                <p>Descripcion:{product.descripcion}</p>
                <p><ItemCounter contar={contar} restar={restar}/></p>
              </div> 
          </div>  
        </div>)          
  }
    return null
}
const ItemCounter=(props)=>{
  return  (
  <div className="itemIndividual3">      
    <button onClick={props.contar} className="btn btn-info">AGREGAR CARRITO</button>
    <button onClick={props.restar} className="btn btn-info">QUITAR</button>
  </div>
  )
}
   
 export default ItemDetalles;