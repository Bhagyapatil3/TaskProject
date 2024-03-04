var hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    console.log(completeData);

    // ` temperate literals

    let data = "";
    completeData.map((value) => {
      data += `<div class="card">
        <img class="imgmap"
          src=${value.image}
          alt="image"
        />
        <div class="productdetails">
        <h6>${value.title.slice(0, 35)}</h6>
        <h3>$${value.price}</h3>
        </div>
      </div>`;
    });

    document.querySelector(".home").innerHTML = data;
  })
  .catch((err) => {
    document.write("waiting");
  });

var tableData = `
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>
  `;
document.querySelector("#table").innerHTML = tableData;
