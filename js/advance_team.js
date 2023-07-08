
const advance_class = document.querySelector('.team-members-teamaa');
let all_team_data = "";

advance_team.map((item, lenght) =>{
    
    if(lenght % 2 == 0){
        all_team_data += `

        <div class="row">
        <div class="col-md-7 order-2">
            <div class="overflow-hidden">
                <h2 class="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">
                    ${item.name}
                </h2>
            </div>
            <div class="overflow-hidden mb-3">
                <p class="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="500">
                    ${item.position}
                </p>
            </div>
            <p class="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">
                ${item.dec}
            </p>
            <p class="pb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">
                ${item.short_dec}
            </p>
            <hr class="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900" />
            <div class="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
                <div class="col-lg-6">
                    <a href="${item.buttons.button1_url}" class="btn btn-modern btn-dark mt-3"> ${item.buttons.button1_text}</a>
                    <a href="${item.buttons.button2_url}" class="btn btn-modern btn-primary mt-3">${item.buttons.button2_text}</a>
                </div>
                <div class="col-sm-6 text-lg-right my-4 my-lg-0">
                    <strong class="text-uppercase text-1 mr-3 text-dark">follow me</strong>
                    <ul class="social-icons float-lg-right">
                        <li class="social-icons-facebook">
                            <a href="${item.socail.facebook_link}" target="_blank" title="Facebook">${item.socail.facebook_icon}</a>
                        </li>
                        <li class="social-icons-twitter">
                            <a href="${item.socail.twitter_link}" target="_blank" title="Twitter">${item.socail.twitter_icon}</a>
                        </li>
                        <li class="social-icons-linkedin">
                            <a href="${item.socail.linkeding_link}" target="_blank" title="Linkedin">${item.socail.linkeding_icon}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
            <img src="${item.image}" class="img-fluid" alt="" />
        </div>
    </div>
    <div class="row">
        <div class="col">
            <hr class="solid my-5" />
        </div>
    </div>
        `
    }else{
        all_team_data += `
        <div class="row">
        <div class="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInLeftShorter">
            <img src="${item.image}" class="img-fluid" alt="" />
        </div>
        <div class="col-md-7 order-2">
            <div class="overflow-hidden">
                <h2 class="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">
                    ${item.name}
                </h2>
            </div>
            <div class="overflow-hidden mb-3">
                <p class="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="500">
                    ${item.position}
                </p>
            </div>
            <p class="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">
                ${item.dec}
            </p>
            <p class="pb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">
                ${item.short_dec}
            </p>
            <hr class="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900" />
            <div class="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
                <div class="col-lg-6">
                    <a href="${item.buttons.button1_url}" class="btn btn-modern btn-dark mt-3">${item.buttons.button1_text}</a>
                    <a href="${item.buttons.button2_url}" class="btn btn-modern btn-primary mt-3">${item.buttons.button2_text}</a>
                </div>
                <div class="col-sm-6 text-lg-right my-4 my-lg-0">
                    <strong class="text-uppercase text-1 mr-3 text-dark">follow me</strong>
                    <ul class="social-icons float-lg-right">
                        <li class="social-icons-facebook">
                            <a href="${item.socail.facebook_link}" target="_blank" title="Facebook">${item.socail.facebook_icon}</a>
                        </li>
                        <li class="social-icons-twitter">
                            <a href="${item.socail.twitter_link}" target="_blank" title="Twitter">${item.socail.twitter_icon}</a>
                        </li>
                        <li class="social-icons-linkedin">
                            <a href="${item.socail.linkeding_link}" target="_blank" title="Linkedin">${item.socail.linkeding_icon}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <hr class="solid my-5" />
        </div>
    </div>

        
        
        `
    }
});
advance_class.innerHTML = all_team_data;