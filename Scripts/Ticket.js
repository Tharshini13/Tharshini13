let Button = document.getElementById("btn")
Button.addEventListener("click",()=>{
    let i1 = document.getElementById("inp1").value;
    let i2 = document.getElementById("inp2").value;

    if(i1.toLowerCase() == "chennai" && i2.toLowerCase() == "bangalore"){
      let Res =   document.getElementById("result")
      Res.innerHTML = `
        <div class="col-sm-3" id="col12">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="./Assets/bus1.jpg">
              <h3>ABC Travels</h3>
              <h4>From:Chennai</h4>
              <h4>To:Bangalore</h4>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
            <img src="./Assets/bus2.jpg">
              <h3>MEGHNA Travels</h3>
              <h4>From:Chennai</h4>
              <h4>To:Bangalore</h4>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="./Assets/bus3.jpg">
                <h3>SRM Travels</h3>
                <h4>From:Chennai</h4>
                <h4>To:Bangalore</h4>
              </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
            <img src="./Assets/bus4.jpg">
              <h3>ASHWIN Transport</h3>
              <h4>From:Chennai</h4>
              <h4>To:Bangalore</h4>
            </div>
          </div>
        </div>`
    }

    if(i1.toLowerCase() == "tenkasi" && i2.toLowerCase() == "chennai")
    {
      let Res2 =   document.getElementById("result2")
      Res2.innerHTML = `
        <div class="col-sm-3" id="col12">
          <div class="card" style="width: 18rem;">
            <div class="card-body2">
              <img src="./Assets/bus1.jpg">
              <h3>ABC Travels</h3>
              <h4>From:Tenkasi</h4>
              <h4>To:Chennai</h4>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body2">
            <img src="./Assets/bus2.jpg">
              <h3>MEGHNA Travels</h3>
              <h4>From:Tenkasi</h4>
              <h4>To:Chennai</h4>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body2">
            <img src="./Assets/bus3.jpg">
              <h3>SRM Travels</h3>
              <h4>From:Tenkasi</h4>
              <h4>To:Chennai</h4>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body2">
            <img src="./Assets/bus4.jpg">
              <h3>ASHWIN Transport</h3>
              <h4>From:Tenkasi</h4>
              <h4>To:Chennai</h4>
            </div>
          </div>
        </div>`    
    }
})










