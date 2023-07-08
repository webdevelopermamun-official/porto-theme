
//----------semple team page filter dynamic start------------//

// const team_filter = document.querySelector('.filter-team-section');
// let team_members_fiter = "";

// team_memberss.map((item) =>{
//     team_members_fiter += `

//     <li class="nav-item" data-option-value=".${item.data_option_value}">
//         <a class="nav-link text-1 text-uppercase" href="#">${item.data_option_data}</a>
//     </li>
//     `
// });
// team_filter.innerHTML = team_members_fiter;
//----------semple team page filter dynamic end------------//
//----------semple team page dynamic start------------//

const team_classsss = document.querySelector('.sort-destination-loader .all-team-memberss');
let team_members = "";

team_memberss.map((items) =>{
    
    team_members += `
            <div class="col-12 col-sm-6 col-lg-3 isotope-item ${items.data_option_value}">
                <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
                    <span class="thumb-info-wrapper">
                        <a href="about-me.html">
                            <img src="${items.members_images}" class="img-fluid" alt="" />
                            <span class="thumb-info-title">
                                <span class="thumb-info-inner">${items.members_name}</span>
                                <span class="thumb-info-type">${items.members_position}</span>
                            </span>
                        </a>
                    </span>
                    <span class="thumb-info-caption">
                        <span class="thumb-info-caption-text">${items.members_dec}</span>
                        <span class="thumb-info-social-icons mb-4">
                            <a target="_blank" href="${items.members_socail.facebook_link}">${items.members_socail.facebook_icon}<span>${items.members_socail.facebook}</span></a>
                            <a target="_blank" href="${items.members_socail.linkedin_link}">${items.members_socail.linkedin_icon}<span>${items.members_socail.facebook}</span></a>
                           
                        </span>
                    </span>
                </span>
            </div>
    `
});


team_classsss.innerHTML = team_members;
