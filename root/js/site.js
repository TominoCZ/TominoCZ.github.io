async function pull() {
    let resp = await fetch("./root/data.json");
    let data = await resp.text();

    return data;
}

function createNode(item) {
    let elItem = document.createElement("div");
    elItem.className = "item center";

    let elName = document.createElement("p");
    elName.className = "track-title";
    elName.innerText = item.name;

    let elID = document.createElement("p");
    elID.className = "track-id";
    elID.innerText = item.id;

    elItem.appendChild(elName);
    elItem.appendChild(elID);

    return elItem;
}

async function load() {
    let data = await pull();
    let json = JSON.parse(data);

    let msg = document.getElementsByClassName("message")[0];
    let list = document.getElementsByClassName("list")[0];
    let splitter = document.getElementsByClassName("splitter")[0];

    splitter.innerText = "- (" + json.data.length + ") -";
    msg.innerText = json.message;

    for (let i = 0; i < json.data.length; i++) {
        let item = json.data[i];
        let elItem = createNode(item);

        list.appendChild(elItem);
    }
}

/*
let msg = document.getElementsByClassName("message")[0];
let list = document.getElementsByClassName("list")[0];
let splitter = document.getElementsByClassName("splitter")[0];

splitter.innerText = "- (" + 1 + ") -";
let elItem = createNode({ name: "test - test", id: 9 });
msg.innerText = "These are maps that will be put in Sound Space!"
list.appendChild(elItem);*/

load();