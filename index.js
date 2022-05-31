import "https://unpkg.com/navigo"  //Will create the global Navigo object used below



import {renderText, setActiveLink, renderTemplate, loadTemplate} from "./utils.js"
import {getPoints} from "./pages/bestTimeInterval/bestTimeInterval.js"
import {addCyclistHandles} from "./pages/crud/addCyclist.js";
import {editCyclistHandles} from "./pages/crud/editCyclist.js";
import {deleteCyclistHandles} from "./pages/crud/deleteCyclist.js";
import {sortCyclistHandles} from "./pages/crud/sortCyclist.js";
import {getAllCyclist} from "./pages/crud/getAllCyclist.js";
//import {addHandlerLink} from "./pages/navigate/navigate.js";



window.addEventListener("load", async () => {

    const templateHome = await loadTemplate("./pages/home/home.html")
    const templateCrud = await  loadTemplate("./pages/crud/crudCyclist.html")
    const templateBestTime = await  loadTemplate("./pages/bestTimeInterval/bestTimeInterval.html")
    //const templatekandidatAdded = await loadTemplate("./pages/crudKandidat/kandidatAdded.html")
    //const templateKandidatEdited = await loadTemplate("./pages/crudKandidat/kandidatedited.html")
    //const templateNavigate = await loadTemplate("./pages/navigate/navigate.html")

    const router = new Navigo("/", { hash: true });
    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        })
        .on("/", () => {renderTemplate(templateHome, "content")})
        .on("/cyclists", () => {renderTemplate(templateCrud, "content")
            getAllCyclist() //Indlæser alle cyclister
            addCyclistHandles() //Add cyclist
            //addHandlerLink(router) //Navigere til kandidatAdded
            editCyclistHandles()
            deleteCyclistHandles()
            sortCyclistHandles()

        })
        .on("/besttime", () => {renderTemplate(templateBestTime, "content")
            getPoints()
        })
        /*
        .on("/show-match", (match) => renderText(`<pre>${JSON.stringify(match, null, 2)}</pre>`, "content"))
        .on("/navigate-programatically", () => {
            renderTemplate(templateNavigate, "content")
            addHandler(router)
        })*/
        .notFound(() => renderText("No page for this route found", "content"))
        .resolve()
});

window.onerror = (e) => alert(e)