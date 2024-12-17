import React from "react";
import { FaRegHeart} from "react-icons/fa";
import { FcLike} from "react-icons/fc";
import { FaRegStarHalfStroke } from "react-icons/fa6";
export function Task4Compo6({ToyData,ToyLikeFun,ToyCartFun}){
          // console.log(ToyData);

    return( 
        <>
          <div className="Task4Compo5">
            <div className="Task4Compo5_heading">Liked</div>
              {
                ToyData.length>0
                ?
                  <div className="Task4Compo4">
                    {
                      ToyData.map((toy)=>{
                        return(
                          <div key={toy.ToyId} className="Task4Compo4_card">
                            <div className="Task4Compo4_card_liked" onClick={()=>ToyLikeFun(toy.ToyId)}>{toy.ToyLike?<FcLike/>:<FaRegHeart/>}</div>                       
                            <div className="Task4Compo4_card_img"><img src={toy.ToyImg} /></div>                        
                            <hr/>
                            <div className="Task4Compo4_card_name">{toy.ToyName.toUpperCase()}</div> 
                            <div className="Task4Compo4_card_div">
                              <div className="Task4Compo4_card_cost">$ {toy.ToyCost}/-</div>                        
                              <div className="Task4Compo4_card_rating"><FaRegStarHalfStroke/>{toy.ToyRating}</div>                        
                            </div>                       
                            {/* <div className="Task4Compo4_card_cart" onClick={()=>ToyCartFun(toy.ToyId)}>
                              {toy.ToyCart
                                ?
                                <div className="Task4Compo4_card_cart_remove">Remove from Cart</div>
                                :
                                <div className="Task4Compo4_card_cart_add">Add to Cart</div>
                              }
                            </div> */}
                            <div className="Task4Compo4_card_cart" onClick={()=>{ToyCartFun(toy.ToyId); ChangeCart();}} class="Rx3d">
                              {toy.ToyCart ?
                                <>
                                  <div id="dimension3">Remove from Cart</div>
                                  <div id="dimension4">Add to Cart</div>
                                </>
                                :
                                <>
                                  <div id="dimension1">Remove from Cart</div>
                                  <div id="dimension2">Add to Cart</div>
                                </>
                              }
                            </div>
                        </div>
                        )
                      })
                    }
                  </div>
                : 
                  <div className="Task4Compo5_cart_items_no">No Items In linked</div>
              }
          </div>  
        </>
    )
}