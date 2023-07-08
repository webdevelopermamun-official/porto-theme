//Home page dynamic start here

//----------Banner section dynamic start------------//

let slider_list = document.querySelector(".owl-stage");
let slider_item = "";

slider.map((item) => {
    slider_item += `
            <div class="owl-item position-relative" style="background-image: url(${item.slider_bg_images}); background-color: #2e3136; background-size: cover; background-position: center;">
            <div class="container position-relative z-index-1 h-100">
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                    <h3 class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation" data-appear-animation="fadeInDownShorter" data-plugin-options="{'minWindowWidth': 0}">
                        <span class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                            <img src="img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                        </span>
                        ${item.short_dec}
                        <span class="position-relative">
                            ${item.syle_text}
                            <span class="position-absolute left-50pct transform3dx-n50 top-0 mt-4">
                                <img src="img/slides/slide-blue-line.png" class="w-auto appear-animation" data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="1000" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                            </span>
                        </span>
                        <span class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                            <img src="img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                        </span>
                    </h3>
                    <h1 class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation" data-appear-animation="blurIn" data-appear-animation-delay="500" data-plugin-options="{'minWindowWidth': 0}">
                        ${item.title}
                    </h1>
                    <p class="text-4 text-color-light font-weight-light opacity-7 mb-0" data-plugin-animated-letters data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}">
                        ${item.slider_dec}
                    </p>
                </div>
            </div>
        </div>
    `;
})

slider_list.innerHTML = slider_item;


//----------Banner section dynamic End------------//
//----------Our Features section dynamic start------------//

const future = document.querySelector('.features-dynamic-1');
let future_text_change = "";

oure_future.map((item) =>{
    future_text_change += `
    <div class="feature-box feature-box-style-2">
        <div class="feature-box-icon">
            ${item.icon}
        </div>
        <div class="feature-box-info">
            <h4 class="font-weight-bold text-4-5 mb-1">${item.title}</h4>
            <p class="mb-4">
                ${item.dec}
            </p>
        </div>
    </div>
    `
});

future.innerHTML = future_text_change;

const oure_future_22 = document.querySelector('.features-dynamic-2');
let future_text_change_2 = "";

oure_future_2.map((item) =>{
    future_text_change_2 += `
    <div class="feature-box feature-box-style-2">
        <div class="feature-box-icon">
            ${item.icon}
        </div>
        <div class="feature-box-info">
            <h4 class="font-weight-bold text-4-5 mb-1">${item.title}</h4>
            <p class="mb-4">
              ${item.dec}
            </p>
        </div>
    </div>
    `
});

oure_future_22.innerHTML = future_text_change_2;

const accordionss = document.querySelector('#accordion');
let accordiontext_change = "";

accordions.map((item) =>{
    accordiontext_change += `

    <div class="card card-default">
        <div class="card-header">
            <h4 class="card-title m-0">
                <a class="accordion-toggle text-color-dark font-weight-bold" data-toggle="collapse" data-parent="#accordion" href="#${item.accordions_link}"">
                    ${item.title_icon}
                    ${item.title}
                </a>
            </h4>
        </div>
        <div id="${item.accordions_link}"" class="collapse">
            <div class="card-body text-2">
                <p class="mb-0">
                    ${item.dec}
                </p>
                <p class="mb-0">
                    <a href="${item.read_more_link}" class="d-block text-color-dark font-weight-semibold pt-4">${item.read_more} ${item.read_more_icon}</a>
                </p>
            </div>
        </div>
    </div>


    `
});

accordionss.innerHTML = accordiontext_change;

//----------Our Features section dynamic end------------//
//----------Images slider section dynamic start------------//

const images_sliders = document.querySelector('.images-slider-ieamsss');
let images_slider = "";

images_slider_data.map((item) =>{
    images_slider += `
    <div>
        <img class="img-fluid" src="${item.images_url}" alt="" />
    </div>
    `
});
images_sliders.innerHTML = images_slider;
//----------Images slider section dynamic end------------//
//----------Blog data section dynamic start------------//

const blogs = document.querySelector('.blog-slider-dynamic');
let blogs_slider = "";

blog_section.map((item) =>{
    blogs_slider += `
    
    <div class="col-lg-6 mb-4 mb-lg-0">
        <article>
            <div class="row">
                <div class="col-auto pr-0">
                    <div class="date">
                        <span class="day font-weight-extra-bold">${item.day}</span>
                        <span class="month text-1">${item.month}</span>
                    </div>
                </div>
                <div class="col pl-1">
                    <h4 class="text-primary text-4">
                        <a class="d-block" href="blog-post.html">${item.post_title}</a>
                    </h4>
                    <p class="pr-4 mb-0">
                        ${item.post_dec}
                    </p>
                    <a href="${item.post_readmore_link}" class="read-more text-color-dark font-weight-semibold text-2">${item.post_readmore_text} ${item.post_readmore_icon}</a>
                </div>
            </div>
        </article>
    </div>
    `
});
blogs.innerHTML = blogs_slider;
//----------Blog data section dynamic end------------//
//----------Clint say section dynamic start------------//
const clients_say_class = document.querySelector('.testimonial-slider-section');
let clients_says = "";

client_say.map((item) =>{
    clients_says += `


    <div>
        <div class="col">
            <div class="testimonial testimonial-primary">
                <blockquote>
                    <p class="mb-0">
                        ${item.title}
                    </p>
                </blockquote>
                <div class="testimonial-arrow-down"></div>
                <div class="testimonial-author">
                    <div class="testimonial-author-thumbnail">
                        <img src="${item.author_images}" class="rounded-circle" alt="" />
                    </div>
                    <p><strong>${item.author_name}</strong><span>${item.author_designation}</span></p>
                </div>
            </div>
        </div>
    </div>

    `
});
 clients_say_class.innerHTML = clients_says;
//----------Clint say section dynamic end------------//
