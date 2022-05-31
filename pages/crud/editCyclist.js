import{SERVER}from "../../settings.js"
import {makeOptions} from "../../fetchUtils.js";


const URL = SERVER+"/cyclist/" // id´en bliver sat ned i fetch efter URL

export function editCyclistHandles() {
    console.log("test")
    document.getElementById("btn-edit").onclick = editCyclist // når du klikker her sker Metode editKandidat()
}
//Metoden exporteres til index.js
export function editCyclist(){

    const cyclist = {}
    const id = document.getElementById("exampleFormControlInput3").value //id på deltager vi gerne vil ændre data på fx navn.
    cyclist.name = document.getElementById("exampleFormControlInput4").value // indput der skal ændres
    const select = document.getElementById("exampleFormControlInput5").value // indput der skal ændres
    cyclist.bicycleTeam={id: select}
    console.log(cyclist)

    fetch(URL+id,makeOptions("PUT",cyclist)) // id bliver sat efter URL da vi siger vi gerne vil have fat i id'en på det vi taster i inputfeltet. vi vil deri også gerne ændre navn og parti.
        .then(res=>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            console.log(res)
            return res.text()
        })
        .then( () => window.location.reload())//For at reloade siden efter hver ændring
        .catch(e => console.log(e))
}