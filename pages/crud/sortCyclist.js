import{SERVER}from "../../settings.js"
//import {encode} from "../../utils";


const URL = SERVER+"/cyclists"

export function sortCyclistHandles() {
    console.log("test")
    document.getElementById("btn-sort").onclick = sortCyclist
}

//document.getElementById("filter-abv").onclick = getBeersAbv
function sortCyclist(event) {
    event.preventDefault()
    const bicycleTeamName = document.getElementById("exampleFormControlInput").value
    fetch(URL)
        .then(res => {
            if (!res.ok) {
                return Promise.reject("Error :" + "incorrect party name entered")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const rows = data.filter(function(cyclists) {
                return cyclists.bicycleTeam.bicycleTeamName === bicycleTeamName}).map(cyclists => `
      <tr>
        <td>${cyclists.cyclistId}</td>
        <td>${cyclists.name}</td>
        <td>${cyclists.bicycleTeam.bicycleTeamName}</td>
      </tr>
      `).join("\n")
            document.getElementById("rows").innerHTML = rows;
        })
        .catch(err => {
            document.getElementById("error").innerText = err
        })
        .finally(e => console.log("Done"))
}