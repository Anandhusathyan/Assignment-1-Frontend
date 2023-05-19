import UseAxios from "../Hooks/usefetch";
import {useCart} from "react-use-cart"

function Body(){


    const { addItem } = useCart();

    const{loading,error,data}=UseAxios("https://assign-1-strapi-gpay.onrender.com/api/games?populate=*")

    console.log("loading",loading,"data",data);

    if(loading) return <p>loading...</p>
    if(error) return <p>Error :(</p>

    return <div  id="body">
        {data.data.map((game)=>{

            return <div id="each-box" key={game.id}>
            {console.log("hello",game.attributes.image.data[0].attributes.url)}
            <div id="content">
            <img className="image" src={`https://assign-1-strapi-gpay.onrender.com${game.attributes.image.data[0].attributes.url}`}  />

            
            <div  className="name">{game.attributes.name}</div>
            </div>
            <div className="description">{game.attributes.Description}</div>
            <div className="price">${game.attributes.price}</div>
            <br/>
            <button id="butt" onClick={() => 
            addItem({price:game.attributes.price,
                id:game.id,
                name:game.attributes.name,
                image:`https://assign-1-strapi-gpay.onrender.com${game.attributes.image.data[0].attributes.url}` })}
                >Add to Cart</button>
            <br/>

            <div className="moredetails"> 
            <label>More_Detail</label>
            <div>{game.attributes.More_Detail}</div>
            </div>

            <div className="review">
            <label>Review</label>
            <div>{game.attributes.Review}</div>
            </div>

            </div>
        })}
    </div>

}

export default Body;