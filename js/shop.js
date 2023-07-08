const shop_class = document.querySelector('.product-lising-classs');
let product_data = "";

product_datas.map((item) =>{
    product_data += `

    <div class="col-sm-6 col-lg-4">
        <div class="product mb-0">
            <div class="product-thumb-info border-0 mb-3">
                <div class="product-thumb-info-badges-wrapper"><span class="badge badge-ecommerce badge-success">${item.product_new}</span><span class="badge badge-ecommerce badge-danger">${item.sale_parsentish}</span></div>
                <div class="addtocart-btn-wrapper">
                    <a href="shop-cart.html" class="text-decoration-none addtocart-btn" data-tooltip data-original-title="Add to Cart">
                        <i class="icons icon-bag"></i>
                    </a>
                </div>
                <a href="ajax/shop-product-quick-view.html" class="quick-view text-uppercase font-weight-semibold text-2">
                    ${item.quick_view}
                </a>
                <a href="shop-product-sidebar-left.html">
                    <div class="product-thumb-info-image product-thumb-info-image-effect">
                        <img alt="" class="img-fluid" src="${item.product_images}" />
                        <img alt="" class="img-fluid" src="${item.product_images_hover}" />
                    </div>
                </a>
            </div>
            <div class="d-flex justify-content-between">
                <div>
                    <a href="#" class="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">${item.short_title}</a>
                    <h3 class="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" class="text-color-dark text-color-hover-primary">${item.title}</a>
                    </h3>
                </div>
                <a href="#" class="text-decoration-none text-color-default text-color-hover-dark text-4"><i class="far fa-heart"></i></a>
            </div>
            <div title="Rated 5 out of 5">
                <input type="text" class="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
            </div>
            <p class="price text-5 mb-3">
                <span class="sale text-color-dark font-weight-semi-bold">${item.reglur_price}</span>
                <span class="amount">${item.sell_price}</span>
            </p>
        </div>
    </div>

    `
});
shop_class.innerHTML = product_data;