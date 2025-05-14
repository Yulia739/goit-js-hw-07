const categoryList = document.querySelectorAll("#categories .item");

categoryList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${title}\nElements: ${itemCount}`);
});
