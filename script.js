//defining the targeted elements
let nextBtn = document.getElementById("next-btn");
let info = document.getElementById("info-container");

async function animalsInfo() {
  let URL = "https://zoo-animal-api.herokuapp.com/animals/rand";

  let response = await fetch(URL, {
    method: "GET",
    mode: 'cors'
  });

  let data = await response.json();

  console.log(data.name);
  console.log("length min", data.length_min);
  console.log("length max", data.length_max);
  console.log("weight min", data.weight_min);
  console.log("weight max", data.weight_max);

  let avgLength = ((+data.length_min + +data.length_max) / 2).toFixed(2);
  let avgWeight = (+data.weight_min + +data.weight_max) / 2;
  avgWeight = (avgWeight / 2.205).toFixed(2);

  info.innerHTML = `
    <!-- animals information start -->
    <div class="col-lg-7 col-sm-12">
      <div class="row mb-2">
          <div class="animal-name">
              <small>NAME</small>
              <p class="name-text">${data.name}</p>
          </div>
      </div>

      <div class="row">
        <div id="info-row" class="col-12 d-flex justify-content-between flex-md-row flex-sm-column p-0">
          <div class="animal-type mb-sm-2">
            <small>TYPE</small>
            <p>${data.animal_type}</p>
          </div>
          <div class="active-time mb-sm-2">
            <small>ACTIVE TIME</small>
            <p>${data.active_time}</p>
          </div>
          <div class="avg-length mb-sm-2">
            <small>AVG. LENGTH</small>
            <p>${avgLength} ft</p>
          </div>
          <div class="avg-weight mb-sm-2">
            <small>AVG. WEIGHT</small>
            <p>${avgWeight} kg</p>
          </div>
        </div>
      </div>

      <div class="row mb-2">
          <div class="habitat">
              <small>HABITAT</small>
              <p>${data.habitat}</p>
          </div>
      </div>

      <div class="row mb-2">
          <div class="diet">
              <small>DIET</small>
              <p>${data.diet}</p>
          </div>
      </div>

      <div class="row">
          <div class="geo-range">
              <small>GEO RANGE</small>
              <p>${data.geo_range}</p>
          </div>
      </div>
    </div>
    <!-- animals information end -->

    <!-- animals images container start -->
    <div class="col-lg-5 col-sm-12 mt-lg-0 mt-sm-3 animal-img">
      <img class="rounded" src="${data.image_link}" alt="" />
    </div>
    <!-- animals images container end -->
    <!-- button start -->
          <div class="col-md-12 d-flex justify-content-center">
            <button type="button" id="next-btn" class="btn btn-link next" onClick="window.location.reload()">Next Creature</button>
          </div>
    <!-- button end -->
    `;
}

animalsInfo();
