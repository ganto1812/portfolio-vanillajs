const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

function uploadImage(input) {
  let image = document.querySelector("#editImage");
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function(e) {
      image.src = e.target.result;
      image.width = "200";
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// function download(image) {

// }
