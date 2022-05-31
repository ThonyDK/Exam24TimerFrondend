import{SERVER}from "../../settings.js"
import {makeOptions} from "../../fetchUtils.js";


const URL = SERVER+"/cyclist/addCyclist"

export function addCyclistHandles() {
    console.log("test")
    document.getElementById("btn-add").onclick = addCyclist
}

export function addCyclist(event){
    event.preventDefault()// stopper siden med at opdatere
    const cyclist = {}
    cyclist.name = document.getElementById("exampleFormControlInput1").value

    const select = document.getElementById("exampleFormControlInput2").value
    cyclist.bicycleTeam={id: select}

    console.log(select)

    fetch(URL,makeOptions("POST",cyclist))
        .then(res=>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            console.log(res)
            return res.text()
        })
        .then( () => window.location.reload())//For at reloade siden efter hver tilføjelse
        .catch(e => console.log(e))
}