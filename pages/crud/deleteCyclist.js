import{SERVER}from "../../settings.js"
import {makeOptions} from "../../fetchUtils.js";


const URL = SERVER+"/cyclist/" // id´en bliver sat ned i fetch efter URL

export function deleteCyclistHandles() {
    console.log("test")
    document.getElementById("btn-delete").onclick = deleteCyclist // når du klikker her sker Metode deleteKandidat()
}
//Metoden exporteres til index.js
export function deleteCyclist(){
    //const knapEnable = event.target //her har vi fat i knappen


    const id = document.getElementById("exampleFormControlInput6").value //id på kandidat vi gerne vil ændre data på fx navn.
    fetch(URL+id,makeOptions("DELETE")) // id bliver sat efter URL da vi siger vi gerne vil have fat i id'en på det vi taster i inputfeltet. vi vil deri også gerne ændre navn og parti.
        .then(res=>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            console.log(res)
            return res.text()
        })
        .then( () => window.location.reload())//For at reloade siden efter hver slettelse
        .catch(e => console.log(e))
}