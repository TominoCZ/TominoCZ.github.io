async function pull() {
    let resp = await fetch("./root/data.json");
    let data = await resp.text();

    return data;
}

function onfail(ex) {
    alert("Failed to load data");

    console.error(ex);
}

function itemToNode(item) {
    let elItem = document.createElement("div");
    elItem.className = "item center";

    let elName = document.createElement("p");
    elName.className = "item-name";
    elName.innerText = item.name;

    let elID = document.createElement("p");
    elID.className = "item-id";
    elID.innerText = item.id;

    elItem.appendChild(elName);
    elItem.appendChild(elID);

    return elItem;
}

async function load() {
    try {
        let data = await pull();
        let json = JSON.parse(data);
        let list = document.getElementsByClassName("list")[0];
        let msg = document.getElementsByClassName("message")[0];

        msg.innerText = json.message;

        for (let i = 0; i < json.data.length; i++) {
            let item = json.data[i];
            let elItem = itemToNode(item);

            list.appendChild(elItem);
        }
    }
    catch (ex) {
        onfail(ex);
    }
}

load();