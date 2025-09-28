createGrid(16);
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let num = prompt("How many squares on a side do you want? (1-100)");

    if (isNaN(num)) {
        alert('Not a valid number');
    } else if (Number(num) < 1 || Number(num) > 100) {
        alert('Not in the range of numbers. It must be between 1-100');
    } else {
        createGrid(Number(num));
    }
})

function createGrid(n=16) {
    const container = document.querySelector("#container");

    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    for (let i = 0; i < n*n; i++) {
        const div = document.createElement("div");
        div.classList.add("child");

        div.style.flex = `1 0 ${100 / n}%`;
        div.style.height = `${100 / n}%`;

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "hsl(183 100% 56%)";
        })

        div.addEventListener("mouseleave", () => { 
            let j = 560;
            const interval = setInterval(() => {
                div.style.backgroundColor = `hsl(183 100% ${j / 5}%)`;
                j--;
                if (j <= 0) clearInterval(interval);
            }, 5);    
        });

        container.appendChild(div);
    }
}
