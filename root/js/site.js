async function downloadFile() {
    let response = await fetch("./root/data.txt");

    if (response.status != 200) {
        throw new Error("Server Error");
    }

    let text_data = await response.text();

    return text_data;
}

async function loadData() {
    try {
        let text_data = await downloadFile();

        console.log(text_data);
    }
    catch (e) {
        alert(e.message);
    }
}

loadData();