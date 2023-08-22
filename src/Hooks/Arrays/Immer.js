import React from "react";
import {useImmer} from "use-immer";
let nextId=3;
const initialList = [
    {id:0,title:'Buy milk',seen:false},
    {id:1,title:'Eat tacos',seen:false},
    {id:2,title:'Brew tea',seen:true}
];
export default function BucketList(){

    const[list,updateList] = useImmer(initialList);
    function handleToggle(artwork,nextSeen){
        updateList(draft=>{
            const artwork = draft.find(a=>a.id === artwork)
        })
    }
    return(
        <>
        <h1>Art Bucket List</h1>
        <h2>My list of art to see:</h2>
        <ItemList artworks={list} onToggle={handleToggle}/>
        </>
    )
}

function ItemList({artworks,onToggle}){
    return(
        <ul>
            {artworks.map(artwork=>{
                return(
                    <li key={artwork.id}>
                    <label>
                        <input type="checkbox"
                         checked={artwork.seen}
                         onChange={e=>{
                            onToggle(artwork.id,e.target.checked)
                         }}
                        />
                        {artwork.title}
                    </label>
                    </li>
                )
            })}
        </ul>
    )
}