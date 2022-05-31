import {SERVER} from "../../settings.js"
import {encode} from "../../utils.js"

const URL = SERVER+"/cyclist"


export async function getAllCyclist(){
    const response = await fetch(URL)
    const parseToJson = await response.json()
    console.log(parseToJson)
    makeRows(parseToJson)
}

function makeRows(rows){
    const trows = rows.map(cyclists =>`
    <tr>
        <td>${cyclists.cyclistId}</td>
        <td>${encode(cyclists.name)}</td>
        <td>${encode(cyclists.bicycleTeam.teamName)}</td>
        <!--<td>
            <button class="btn btn-secondary flex-end" data-bs-placement="bottom" title="edit kandidat" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <i class="bi bi-pencil" style="font-size: 1rem; color: white;"></i>
            </button>
                <i class="bi bi-pencil" style="font-size: 1rem; color: white;"></i>
          
            <button id="btn-delete" class="btn btn-danger flex-end" data-bs-placement="bottom" data-id="" onclick="deleteKandidat()" title="delete kandidat" data-bs-toggle="tooltip" >
                <i class="bi bi-trash" style="font-size: 1rem; color: white;"></i>
            </button>
        </td> -->
    </tr>
    `).join("\n")
    document.getElementById("rows").innerHTML = trows
}