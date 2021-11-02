const deleteButton = document.querySelectorAll(".deletebtn");
const withdraw = document.querySelector('#withdraw')
const deposit = document.querySelector('#deposit')


Array.from(deleteButton).forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log(e.target.dataset.value);
    const name = e.target.dataset.value;
    fetch("account", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});

  withdraw.onclick = function () {
  console.log(this.parentNode.childNodes)
  const name = this.parentNode.childNodes[1].value;
  const change = Number(this.parentNode.childNodes[3].value) * -1;
  const reason = this.parentNode.childNodes[5].value;
  fetch("account", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      withdrawal: change,
      reason: reason,
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.reload(true);
    });
};
  deposit.onclick = function () {
  const name = this.parentNode.childNodes[1].value;
  const change = Number(this.parentNode.childNodes[3].value);
  const reason = this.parentNode.childNodes[5].value;
  fetch("account", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      deposit: change,
      reason: reason,
    }),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.reload(true);
    });
};
//two onclicks on single query selectors for withdraw and deposit buttons, the same but deposit is positive value while withdraw returns negative value with diff property value names for the if() logic for my app.put
