const rows = document.querySelectorAll("#ui ul li");
// const rows = document.querySelectorAll(".test");
const html = document.documentElement;

document.addEventListener("scroll", (e) => {
  let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight);

  let total = 1 / rows.length;

  for (let [index, row] of rows.entries()) {
    // let progress = (scrolled - start) / (end - start);
    let progress =
      html.clientHeight + html.scrollTop - row.offsetTop - row.offsetHeight;
    // console.log(
    //   html.clientHeight,
    //   html.scrollTop,
    //   row.offsetTop,
    //   row.offsetHeight
    // );
    console.log(progress);

    // if (progress >= 1) progress = 1;
    // if (progress <= 0) progress = 0;

    if (progress >= 1) {
      row.classList.remove("content--title--hide");
      row.classList.add("content--title");
    }
    if (progress <= 0) {
      row.classList.remove("content--title");
      row.classList.add("content--title--hide");
    }

    // row.style.setProperty("--progress", progress);
  }
});
