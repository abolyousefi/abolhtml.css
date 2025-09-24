const params = new URLSearchParams(window.location.search);
const blogsId = params.get("id");

const baseUrl = `https://front-course-blog-api.vercel.app/api/blogs/${blogsId}`;

const newsData = fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const temp = `
                    <div class="phone-title">
                        ${data.title}<span> "${data.author}"</span>
                    </div>`;
        $(".phone-content").html(temp);

        const option = `
                    <img class="leaf-img2" src="./images/leaf2.png" alt="" />
                    <p>${data.category}<span> "${data.author}"</span></p>
                    <p class="recent-title-p">${data.content}</p>`;
        $(".recent-title").html(option);
    });

const newsData2 = fetch(
    "https://front-course-blog-api.vercel.app/api/blogs?limit=100"
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.blogs.forEach((value) => {
            const temp = `<div class="swiper-slide swiper-slid-news">
                        <div class="news-carts">
                            <img class="news-carts-img" src="./images/news-carts.png" alt=""/>
                            <div class="news-carts-content">
                                <div>
                                    <img
                                        class="news-carts-content-img"
                                        src="../assets/images/new-releases.png"
                                        alt=""
                                    />${value.category}
                                </div>
                                <a href="#">
                                    <img src="./images/share.png" alt="" />
                                </a>
                            </div> 
                            <div class="news-carts-title"><span>${value.id}.</span> ${value.title}</div>
                            <div class="news-carts-excerpt">${value.excerpt}</div>
                            <div class="news-carts-info">
                                <p><i class="fa-regular fa-calendar"></i><span>${value.publishedAt}</span></p>
                                <p><i class="fa-solid fa-eye"></i><span>${value.readTime}</span></p>
                            </div>
                            <div class="news-carts-link">
                                <a href="./news-detail.html?id=${value.id}">
                                    <i class="fa-solid fa-plus"></i>مشاهده بیشتر
                                </a>
                            </div>
                        </div>
                    </div>`;
            $(".swiper-wrapper").append(temp);
        });
    });

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        // 768: {
        //     slidesPerView: 5,
        // },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000,
    },
    rtl: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});
