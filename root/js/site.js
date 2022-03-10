async function pull() {
    let resp = await fetch("./root/data.json");
    let data = await resp.text();

    return data;
}

async function onfail(ex) {
    alert("Failed to load data");

    console.error(ex);
}

async function load() {
    try {
        let data = await pull();

        console.log("fetched data:\n" + data);

        let json = JSON.parse(data);
        let list = document.getElementsByClassName("center-list");

        for (let i = 0; i < json.length; i++) {
            let item = json[i];
            let el = document.createElement("div");
            el.className = "center-item";
            el.innerText = item.id + ": " + item.name.trim();

            list.appendChild(el); 
        }
    }
    catch(ex) {
        onfail(ex);
    }
}

load();