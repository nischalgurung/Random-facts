const fact = document.querySelector("#fact");
const factBtn = document.querySelector("#factBtn");

getRandomFact();

async function getRandomFact() {
  const config = {
    headers: { "X-Api-Key": "2BM5bW/CgbFOPJFGOQj7Xw==71sjzGBZNbMxx0v6" },
    contentType: "application/json",
  };
  const res = await fetch(
    "https://api.api-ninjas.com/v1/facts?limit=1",
    config
  );
  const data = await res.json();
  fact.textContent = data[0].fact;
}
factBtn.addEventListener("click", getRandomFact);
