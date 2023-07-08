//Home page dynamic start here

//----------Banner section Data start------------//

const slider = [
  {
    id: 1,
    slider_bg_images:
      "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_640.png",
    title: "This is slider heading 1",
    short_dec: "wordpress",
    syle_text: " Style text 1",
    slider_dec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo.",
  },
  {
    id: 2,
    slider_bg_images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlRnalLvKNKpdmJxQqOYDCml5SoKkcq4g-g&usqp=CAU",
    title: "This is slider heading 2",
    short_dec: "CSS",
    syle_text: " Style text 2",
    slider_dec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo.",
  },
  {
    id: 3,
    slider_bg_images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBB9E9IbjbgL5OMSO8-syUjw7AsbzUwmzRRGletyE_jPm9uJ4SJGuigNLdpG2uQkQ8CXQ&usqp=CAU",
    title: "This is slider heading 3",
    short_dec: "php",
    syle_text: " Style text 3",
    slider_dec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo.",
  },
];

//----------Banner section dynamic End------------//
//----------Our Features section dynamic start------------//
const oure_future = [
  {
    id: 1,
    icon: '<i class="icons icon-support text-color-primary"></i>',
    title: "Customer Suppor",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 2,
    icon: '<i class="icons icon-doc text-color-primary"></i>',
    title: "HTML5 / CSS3 / JS",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 3,
    icon: '<i class="icons icon-social-google text-color-primary"></i>',
    title: "500+ Google Fonts",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 4,
    icon: '<i class="icons icon-pencil text-color-primary"></i>',
    title: "Colors",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
];
const oure_future_2 = [
  {
    id: 1,
    icon: ' <i class="icons icon-layers text-color-primary"></i>',
    title: "Sliders",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 2,
    icon: ' <i class="icons icon-user text-color-primary"></i>',
    title: "Icons",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 3,
    icon: '<i class="icons icon-menu text-color-primary"></i>',
    title: "Buttons",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 4,
    icon: '<i class="icons icon-screen-desktop text-color-primary"></i>',
    title: "Lightbox",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
];
const accordions = [

  {
    id: 1,
    title_icon: '<i class="icons icon-diamond text-color-primary"></i>',
    title: "Creative Websites",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte. Adipiscing elit phasellus blanit ma...",
    read_more: "read more ",
    read_more_icon: '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    read_more_link: "#",
    accordions_link: "collapseOne"
  },
  {
    id: 2,
    title_icon: '<i class="icons icon-bubble text-color-primary"></i>',
    title: "Contact Forms",
    dec: "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
    accordions_link: "collapseTow"
  },
  {
    id: 3,
    title_icon: '<i class="icons icon-grid text-color-primary"></i>',
    title: "Portfolio Pages",
    dec: "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
    accordions_link: "collapseThree"
  },
];

//----------Our Features section dynamic end------------//

//----------Images slider section dynamic start------------//

const images_slider_data = [
    {
        id: 1,
        images_url : 'img/logos/logo-1.png'

    },
    {
        id: 2,
        images_url : 'img/logos/logo-2.png'

    },
    {
        id: 3,
        images_url : 'img/logos/logo-3.png'

    },
    {
        id: 4,
        images_url : 'img/logos/logo-4.png'

    },
    {
        id: 5,
        images_url : 'img/logos/logo-5.png'

    },
    {
        id: 6,
        images_url : 'img/logos/logo-1.png'

    },
    {
        id: 7,
        images_url : 'img/logos/logo-3.png'

    },
    {
        id: 8,
        images_url : 'img/logos/logo-5.png'

    },
];
//----------Images slider section dynamic end------------//
//----------Blog data section dynamic start------------//
const blog_section = [

    {
        id : 1,
        day : 15,
        month : 'JAN',
        post_title : "Lorem ipsum dolor sit amet, consectetur",
        post_dec : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        post_readmore_text : "Read more",
        post_readmore_link : "#",
        post_readmore_icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    },
    {
        id : 2,
        day : 12,
        month : 'JAN',
        post_title : "Lorem ipsum dolor sit amet, consectetur",
        post_dec : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        post_readmore_text : "Read more",
        post_readmore_link : "#",
        post_readmore_icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    },
    {
        id : 3,
        day : 15,
        month : 'JAN',
        post_title : "Lorem ipsum dolor sit amet, consectetur",
        post_dec : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        post_readmore_text : "Read more",
        post_readmore_link : "#",
        post_readmore_icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    },
    {
        id : 4,
        day : 15,
        month : 'JAN',
        post_title : "Lorem ipsum dolor sit amet, consectetur",
        post_dec : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        post_readmore_text : "Read more",
        post_readmore_link : "#",
        post_readmore_icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    },
];

//----------Blog data section dynamic end------------//
//----------Clint say section dynamic start------------//

const client_say = [

    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat.",
      author_name:"John Doe",
      author_designation:'CEO at Company',
      author_images : 'img/clients/client-1.jpg',


    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat.",
      author_name:"John Doe",
      author_designation:'CEO at Company',
      author_images : 'img/clients/client-1.jpg',


    },


];
//----------Clint say section dynamic end------------//


//----------semple team page filter dynamic start------------//

const team_memberss = [
  {
      id : 1,
      data_option_value: 'Leadership',
      members_images : 'img/team/team-1.jpg',
      members_name: 'John Doe',
      members_position: 'CEO',
      members_dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
      members_socail: 
          {
              facebook: 'Facebook',
              facebook_icon: '<i class="fab fa-facebook-f"></i>',
              facebook_link: 'https://www.facebook.com',

              linkedin: 'Linkedin',
              linkedin_icon: '<i class="fab fa-linkedin-in"></i><span>',
              linkedin_link: 'https://www.linkedin.com',
          },
  },
  {
      id : 2,
      data_option_value: 'Leadership',
      members_images : 'img/team/team-2.jpg',
      members_name: 'John Doe',
      members_position: 'CEO',
      members_dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
      members_socail: 
          {
              facebook: 'Facebook',
              facebook_icon: '<i class="fab fa-facebook-f"></i>',
              facebook_link: 'https://www.facebook.com',

              linkedin: 'Linkedin',
              linkedin_icon: '<i class="fab fa-linkedin-in"></i><span>',
              linkedin_link: 'https://www.linkedin.com',
          },
  },
  {
      id : 3,
      data_option_value: 'Marketing',
      members_images : 'img/team/team-3.jpg',
      members_name: 'John Doe',
      members_position: 'CEO',
      members_dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
      members_socail: 
          {
              facebook: 'Facebook',
              facebook_icon: '<i class="fab fa-facebook-f"></i>',
              facebook_link: 'https://www.facebook.com',

              linkedin: 'Linkedin',
              linkedin_icon: '<i class="fab fa-linkedin-in"></i><span>',
              linkedin_link: 'https://www.linkedin.com',
          },
  },
  {
      id : 4,
      data_option_value: 'Development',
      members_images : 'img/team/team-4.jpg',
      members_name: 'John Doe',
      members_position: 'CEO',
      members_dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
      members_socail: 
          {
              facebook: 'Facebook',
              facebook_icon: '<i class="fab fa-facebook-f"></i>',
              facebook_link: 'https://www.facebook.com',

              linkedin: 'Linkedin',
              linkedin_icon: '<i class="fab fa-linkedin-in"></i><span>',
              linkedin_link: 'https://www.linkedin.com',
          },
  },
  {
      id : 5,
      data_option_value: 'Design',
      members_images : 'img/team/team-5.jpg',
      members_name: 'John Doe',
      members_position: 'CEO',
      members_dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
      members_socail: 
          {
              facebook: 'Facebook',
              facebook_icon: '<i class="fab fa-facebook-f"></i>',
              facebook_link: 'https://www.facebook.com',

              linkedin: 'Linkedin',
              linkedin_icon: '<i class="fab fa-linkedin-in"></i><span>',
              linkedin_link: 'https://www.linkedin.com',
          },
  },
  {
      id : 6,
      data_option_value: 'Design',
      members_images : 'img/team/team-6.jpg',
      members_name: 'John Doe',
      members_position: 'CEO',
      members_dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
      members_socail: 
          {
              facebook: 'Facebook',
              facebook_icon: '<i class="fab fa-facebook-f"></i>',
              facebook_link: 'https://www.facebook.com',

              linkedin: 'Linkedin',
              linkedin_icon: '<i class="fab fa-linkedin-in"></i><span>',
              linkedin_link: 'https://www.linkedin.com',
          },
  },
    

];

//----------Shop page product data------------//
const product_datas = [
  {
    id : 1,
    product_new: 'New',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-1.jpg",
    product_images_hover: 'img/products/product-grey-1.jpg',
    short_title: 'electronics',
    title: 'Photo Camera',
    reglur_price: "$69,00",
    sell_price: "$59,00",

  },
  {
    id : 2,
    product_new: 'New',
    sale_parsentish: '27% OFF',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-7.jpg",
    product_images_hover: 'img/products/product-grey-7-2.jpg',
    short_title: 'accessories',
    title: 'Porto Headphone',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 3,
    product_new: '',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-2.jpg",
    product_images_hover: 'img/products/product-grey-2.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 4,
    product_new: '',
    sale_parsentish: '27% OFF',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-3.jpg",
    product_images_hover: 'img/products/product-grey-3.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 5,
    product_new: '',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-4.jpg",
    product_images_hover: 'img/products/product-grey-4.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 6,
    product_new: '',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-5.jpg",
    product_images_hover: 'img/products/product-grey-5.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 7,
    product_new: '',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-6.jpg",
    product_images_hover: 'img/products/product-grey-6.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 8,
    product_new: '',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-8.jpg",
    product_images_hover: 'img/products/product-grey-8.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },
  {
    id : 9,
    product_new: '',
    sale_parsentish: '',
    quick_view : "QUICK VIEW",
    product_images: "img/products/product-grey-9.jpg",
    product_images_hover: 'img/products/product-grey-9.jpg',
    short_title: 'sports',
    title: 'Golf Bag',
    reglur_price: "$99,00",
    sell_price: "$199,00",

  },


]

const advance_team = [

  {
    id : 1,
    name: 'John Doe',
    position:'CEO',
    image:"img/team/team-1.jpg",
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.',
    short_dec : 'Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.',
    buttons: {
      button1_text: 'Get In Touch',
      button1_url: '#',

      button2_text: 'Hire Me',
      button2_url: '#',
    },
    socail : {
      facebook_icon :  '<i class="fab fa-facebook-f"></i>',
      facebook_link :  "#",

      twitter_icon :  '<i class="fab fa-twitter"></i>',
      twitter_link :  "#",

      linkeding_icon :  '<i class="fab fa-linkedin-in"></i>',
      linkeding_link :  "#",

    }
  },
  {
    id : 2,
    name: 'John Doe',
    position:'CEO',
    image:"img/team/team-2.jpg",
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.',
    short_dec : 'Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.',
    buttons: {
      button1_text: 'Get In Touch',
      button1_url: '#',

      button2_text: 'Hire Me',
      button2_url: '#',
    },
    socail : {
      facebook_icon :  '<i class="fab fa-facebook-f"></i>',
      facebook_link :  "#",

      twitter_icon :  '<i class="fab fa-twitter"></i>',
      twitter_link :  "#",

      linkeding_icon :  '<i class="fab fa-linkedin-in"></i>',
      linkeding_link :  "#",

    }
  },
  {
    id : 3,
    name: 'John Doe',
    position:'CEO',
    image:"img/team/team-3.jpg",
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.',
    short_dec : 'Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.',
    buttons: {
      button1_text: 'Get In Touch',
      button1_url: '#',

      button2_text: 'Hire Me',
      button2_url: '#',
    },
    socail : {
      facebook_icon :  '<i class="fab fa-facebook-f"></i>',
      facebook_link :  "#",

      twitter_icon :  '<i class="fab fa-twitter"></i>',
      twitter_link :  "#",

      linkeding_icon :  '<i class="fab fa-linkedin-in"></i>',
      linkeding_link :  "#",

    }
  },
  {
    id : 4,
    name: 'John Doe',
    position:'CEO',
    image:"img/team/team-4.jpg",
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.',
    short_dec : 'Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.',
    buttons: {
      button1_text: 'Get In Touch',
      button1_url: '#',

      button2_text: 'Hire Me',
      button2_url: '#',
    },
    socail : {
      facebook_icon :  '<i class="fab fa-facebook-f"></i>',
      facebook_link :  "#",

      twitter_icon :  '<i class="fab fa-twitter"></i>',
      twitter_link :  "#",

      linkeding_icon :  '<i class="fab fa-linkedin-in"></i>',
      linkeding_link :  "#",

    }
  },
  {
    id : 5,
    name: 'John Doe',
    position:'CEO',
    image:"img/team/team-5.jpg",
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.',
    short_dec : 'Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.',
    buttons: {
      button1_text: 'Get In Touch',
      button1_url: '#',

      button2_text: 'Hire Me',
      button2_url: '#',
    },
    socail : {
      facebook_icon :  '<i class="fab fa-facebook-f"></i>',
      facebook_link :  "#",

      twitter_icon :  '<i class="fab fa-twitter"></i>',
      twitter_link :  "#",

      linkeding_icon :  '<i class="fab fa-linkedin-in"></i>',
      linkeding_link :  "#",

    }
  },







  
]