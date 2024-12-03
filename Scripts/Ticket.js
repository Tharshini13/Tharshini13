let Button = document.getElementById("btn")
Button.addEventListener("click", () => {
  let i1 = document.getElementById("inp1").value;
  let i2 = document.getElementById("inp2").value;




  if (i1 == "chennai" && i2 == "bangalore") {
    location = "./Ticketbooking.html"
  }




  if (i1 == "" && i2 == "") {

    let Art = document.getElementById("art")
    Art.innerHTML = `
<div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
  <strong>Can't find Anything</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
  }

})














