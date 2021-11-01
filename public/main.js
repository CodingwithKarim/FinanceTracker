const deleteButton = document.querySelectorAll('.deletebtn')

Array.from(deleteButton).forEach(function(element){
element.addEventListener("click", function(e){
  console.log(e.target.dataset.value)
  const name = e.target.dataset.value
  fetch('account', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': name
    })
  }).then(function (response) {
    window.location.reload()
  })
})
})

document.querySelector("#withdraw").onclick = function(){
  console.log("hi")
  const name = this.parentNode.childNodes[1].value;
  const change = (Number(this.parentNode.childNodes[3].value))*-1;
  console.log(change)
  const reason = this.parentNode.childNodes[5].value;
  fetch("account",{
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'withdrawal': change,
      'reason': reason
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
};
document.querySelector("#deposit").onclick = function(){
  const name = this.parentNode.childNodes[1].value;
  const change = Number(this.parentNode.childNodes[3].value);
  const reason = this.parentNode.childNodes[5].value;
  fetch("account",{
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'deposit': change,
      'reason': reason
    })
  })
  .then(response => {
    console.log(response);
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
};
