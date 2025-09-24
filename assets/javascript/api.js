const baseUrl = "https://front-course-blog-api.vercel.app/api/blogs";
const n = 30;
const pageCount = 4;
let y = baseUrl + `?limit=${n}`;
let z = baseUrl + `?page1&limit=9`;

const fetchBlogs = (t) => {
    fetch(t)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $(".news-display").html("");
            data.blogs.forEach((item) => {
                renderBlogs(item);
            });
        });
};
const fetchCategories = (t) => {
    const allCatories = [];
    fetch(t)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.blogs.forEach((value) => {
                // console.log(value.category);
                if (!allCatories.includes(value.category)) {
                    allCatories.push(value.category);
                }
            });
            allCatories.forEach((item) => {
                // console.log(item);
                const option = `<a class="category" href="#"><span>${item}</span></a>`;
                $(".news-filter").append(option);
            });
        });
};
fetchCategories(y);

fetchBlogs(z);
localStorage.setItem("pageLinkText", "1");
// $('a[item="first-item"]').addClass("disabled-link");

$(".all-links").on("click", function () {
    $(".nav-display").removeClass("nav-display-none");

    localStorage.setItem("pageLinkText", "1");
    const pageItem = $(this).text();
    z = baseUrl + `?page=1&limit=9`;
    fetchBlogs(z);
});

// let pageLinkText = localStorage.getItem("pageLinkText");
$(".page-link").on("click", function () {
    let pageItem = $(this).text();
    // console.log(pageItem);
    let pageLinkText = localStorage.getItem("pageLinkText");
    // console.log(pageLinkText);

    if (pageItem === "بعدی ") {
        if (pageLinkText === "4") {
            pageLinkText = "0";
        }
        pageItem = ++pageLinkText;
    } else if (pageItem === " قبلی") {
        if (pageLinkText === "1") {
            pageLinkText = "5";
        }
        pageItem = --pageLinkText;
    }

    // if (pageLinkText === "1") {
    //     $('a[item="first-item"]').addClass("disabled-link");
    // } else if (pageLinkText === "4") {
    //     $('a[item="last-item"]').addClass("disabled-link");
    // } else {
    //     $('a[item="first-item"]').removeClass("disabled-link");
    //     $('a[item="last-item"]').removeClass("disabled-link");
    // }

    // console.log(pageItem);
    z = baseUrl + `?page=${pageItem}&limit=9`;
    // console.log(z);
    fetchBlogs(z);

    localStorage.setItem("pageLinkText", pageItem);
});

const newsData = fetch(y)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        $(".category").on("click", function () {
            $(".nav-display").addClass("nav-display-none");
            const linkValue = $(this).text();
            // console.log(linkValue);
            const webDevBlogs = data.blogs.filter(
                (blog) => blog.category === linkValue
            );
            // console.log(webDevBlogs);
            $(".news-display").html("");
            webDevBlogs.forEach((item) => {
                // console.log(item.id);
                renderBlogs(item);
            });
        });
    });

const renderBlogs = (x) => {
    const temp = `<div class="col-lg-4 col-sm-6 col-12 news-col">
                        <div class="news-carts">
                            <img class="news-carts-img" src="./images/news-carts.png" alt=""/>
                            <div class="news-carts-content">
                                <div>
                                    <img
                                        class="news-carts-content-img"
                                        src="../assets/images/new-releases.png"
                                        alt=""
                                    />${x.category}
                                </div>
                                <a href="#">
                                    <img src="./images/share.png" alt="" />
                                </a>
                            </div> 
                            <div class="news-carts-title"><span>${
                                x.id
                            }.</span> ${x.title}</div>
                            <div class="news-carts-excerpt">${x.excerpt}</div>
                            <div class="news-carts-info">
                                <p><i class="fa-regular fa-calendar"></i><span>${x.publishedAt
                                    .slice(0, 10)
                                    .split("-")
                                    .join("/")}</span></p>
                                <p><i class="fa-solid fa-eye"></i><span>${
                                    x.readTime
                                }</span></p>
                            </div>
                            <div class="news-carts-link">
                                <a href="./news-detail.html?id=${x.id}">
                                    <i class="fa-solid fa-plus"></i>مشاهده بیشتر
                                </a>
                            </div>
                        </div>
                    </div>`;
    $(".news-display").append(temp);
};
// const urlParams = new URLSearchParams(window.location.search);
// const page = urlParams.get("page");
