let container = document.getElementsByClassName("container")[0];
let lists = container.querySelector("ul");
let Btn = container.querySelector("button");
let text = container.querySelector("input");

Btn.addEventListener('click', () => {
    let output = text.value.trim();

    if (output === "") {
        alert("put words inside input");
        return;
    }

    let list = document.createElement("li");
    list.textContent = output;

    let remove = document.createElement("button");
    remove.innerHTML = "❌";

    remove.addEventListener('click', () => {
        list.remove();
    });

    list.appendChild(remove);
    lists.appendChild(list);
    text.value = "";
});
