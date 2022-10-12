import React from "react";

function NavBar() {
  let links = ["home", "about", "projects"];
  console.log(links)
  const linksElement = links.map((link) => {
    return(
      <a key ={link} href={'#' + link}>{link}</a>
    );
});
console.log(linksElement)

  return <nav>{linksElement}</nav>;
}

export default NavBar;
