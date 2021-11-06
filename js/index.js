// Scripts for index page

// Newsletter
function newsletter_response() {
    const targ_element = document.getElementsByTagName("h2")[0];
    targ_element.innerHTML = "Thank you for joining!";
    targ_element.style.paddingTop = "5px";
    targ_element.style.borderTop = "2px solid #eeeeee";
    targ_element.style.borderTopRightRadius = "10px";
    targ_element.style.borderTopLeftRadius = "10px";
}
