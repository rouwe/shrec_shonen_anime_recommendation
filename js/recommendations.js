// Script for recommended anime pages

const old_id = 0
const new_id = 1
// Prev
function prev_image() {
    // Variable definition
    var current_image = document.getElementsByClassName("img_style")[0];
    // Regex pattern
    let text = current_image.getAttribute("src")
    let pattern = "img"
    let result = text.match(pattern)
    // Replace image number
    let img_src = result.input
    new_src = img_src.replace(img_src[result.index + 3], old_id)
    setattr = current_image.setAttribute("src", new_src)
}
// Next
function next_image() {
    // Variable definition
    var current_image = document.getElementsByClassName("img_style")[0];
    // Regex pattern
    let text = current_image.getAttribute("src")
    let pattern = "img"
    let result = text.match(pattern)
    // Replace image number
    let img_src = result.input
    new_src = img_src.replace(img_src[result.index + 3], new_id)
    setattr = current_image.setAttribute("src", new_src)
}