import React, { useState,useEffect } from "react";
import { Task4Compo3 } from "./Task4Compo3";
import { Task4Compo4 } from "./Task4Compo4";
import { ToyData } from "./Task4DataBase";
import { FaSearch } from "react-icons/fa";
 

export function Task4Compo2(){
    const [showList,setshowList]=useState(false);
    const [InitalToyData,UpdataToyData]=useState(ToyData);
    const [SearcParameter,setSearcParameter]=useState('')

    const ForshowList=()=>{
      setshowList(!showList);
    }

    const Searchapply=(e)=>{
        setSearcParameter(e.target.value.toLowerCase());
        var k=e.target.value.toLowerCase()
        if(k==0){
          UpdataToyData(ToyData);
        }
        else{
          const SearchToyData = ToyData.filter((toy)=>{
            return toy.ToyName.toLowerCase().includes(SearcParameter);
          })
          UpdataToyData(SearchToyData);
        }
    }
    
    return(
        <>
            <div className="Task4Compo2">
              <div className="Task4Compo2_icon" onClick={ForshowList}>{showList?<div>✖️</div>:<div>🟰</div>}</div> 
              <div className="Task4Compo2_search"><FaSearch/><input type="text" placeholder="Search" onChange={(e)=>Searchapply(e)} className="Task4Compo2_search_input"/></div>  
            </div>
            <Task4Compo2_1 showList={showList} ToyData_1={InitalToyData}/> 
        </>
    )
}

function Task4Compo2_1({showList,ToyData_1}){

    const [originalToyData,setToyData]=useState(ToyData_1);
    const [sortList,setsortList]=useState(false);
    const [filterList,setfilterList]=useState(false);
    const [DataSort,setDataSort]=useState(false);
    const [FilterApply,setFilterApply]=useState(true)

    const importedData=()=>{setToyData(ToyData_1)} 
    useEffect(() => {
      if(FilterApply){
        importedData();
      } 
    });
    const ForsortList=()=>{
        setsortList(!sortList);
    }
    const ForfilterList=()=>{
        setfilterList(!filterList);
        setFilterApply(true);
    } 
    const SoatByName=()=>{
        setDataSort(!DataSort);
        originalToyData.sort((n1,n2) =>  [n1.ToyName.localeCompare(n2.ToyName)]);
    }
    const SoatByPrise=()=>{
        setDataSort(!DataSort);
        originalToyData.sort((n1,n2) =>  [n1.ToyCost-n2.ToyCost]);    
    }
    const SoatByRating=()=>{
        setDataSort(!DataSort);
        originalToyData.sort((n1,n2) =>  [n1.ToyRating-n2.ToyRating]);  
    }
    const FilterByRating=(Rating)=>{
      setDataSort(!DataSort);
      const RatingFilterData=ToyData_1.filter((toy)=>{
        return toy.ToyRating>Rating;
      })
      setToyData(RatingFilterData);
      setFilterApply(false);
    }
    const FilterByprise=(Prise)=>{
      setDataSort(!DataSort);
      const PriseFilterData=ToyData_1.filter((toy)=>{
        return parseInt(toy.ToyCost)>Prise;
      })
      setToyData(PriseFilterData);
      setFilterApply(false)
    }
    return(
      <>
        <div className="Task4Compo2_1">
          <div>
            {showList?
              <>
                <div className="Task4Compo2_list1">
                <div className="Task4Compo2_list1_but" onClick={ForsortList}>SORT</div>
                <div>
                  {sortList?
                    <>
                      <div className="Task4Compo2_list1_but1" onClick={SoatByName}>Name</div>
                      <div className="Task4Compo2_list1_but1" onClick={SoatByPrise}>Prise</div>
                      <div className="Task4Compo2_list1_but1" onClick={SoatByRating}>Rating</div>
                    </>
                    :<></>
                  }
                </div>
                <div className="Task4Compo2_list1_but" onClick={ForfilterList}>FILTER</div>
                <div>
                  {filterList?
                    <>
                      <div className="Task4Compo2_list1_but1">Rating</div>
                      <div><input type="radio" id="R1" name="rating" onChange={()=>FilterByRating(4.5)}/><label htmlFor="R1" >Above 4.5</label></div>
                      <div><input type="radio" id="R2" name="rating" onChange={()=>FilterByRating(4.0)}/><label htmlFor="R2" >Above 4.0</label></div>
                      <div><input type="radio" id="R3" name="rating" onChange={()=>FilterByRating(3.5)}/><label htmlFor="R3" >Above 3.5</label></div>
                      <div className="Task4Compo2_list1_but1">Prise</div>
                      <div><input type="radio" id="P1" name="prise" onChange={()=>FilterByprise(500)} /><label htmlFor="P1" >Above $ 500 </label></div>
                      <div><input type="radio" id="P2" name="prise" onChange={()=>FilterByprise(1000)} /><label htmlFor="P2" >Above $ 1000 </label></div>
                      <div><input type="radio" id="P3" name="prise" onChange={()=>FilterByprise(1500)} /><label htmlFor="P3" >Above $ 1500 </label></div>
                      <div><input type="radio" id="P4" name="prise" onChange={()=>FilterByprise(2000)} /><label htmlFor="P4" >Above $ 2000 </label></div>
                      <div><input type="radio" id="P5" name="prise" onChange={()=>FilterByprise(2500)} /><label htmlFor="P5" >Above $ 2500 </label></div>
                    </>
                    :<></>
                  }
                </div>
                </div>
              </>
              :<></>
            }
          </div>
              <div className="Task4Compo3" style={{ width: showList ? "90%" : "100%" }}>
                <Task4Compo3/>
                <Task4Compo4 ToyData={originalToyData} /> 
              </div>
            </div>

        </>
    )
}