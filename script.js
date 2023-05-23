function replaceBigImage() {
    let thisImageSrc = event.target.src;
    let thumbnailSrc = thisImageSrc.replace("-thumbnail.jpg", ".jpg");
    let currentBigImage = document.querySelector(".big-image");
    currentBigImage.src = thumbnailSrc;
}
function countMinus() {
    let countP = document.querySelector('.count');
    let count = parseInt(countP.textContent);
    if (count > 0) {
        count--;
    }
    countP.textContent = count;
}
function countPlus() {
    let countP = document.querySelector('.count');
    let count = parseInt(countP.textContent);
    count++;
    countP.textContent = count;
}

function removeItem() {
    let countP = document.querySelector('.count');
    let empty_cart = document.querySelector('.empty-cart');
    let profile = document.querySelector('.profile');
    let cart = document.querySelector('.cart');
    countP.textContent = '0';
    cart.style.display = 'none';
    empty_cart.style.display = 'block';
    document.addEventListener("click", function(event) {
        if ((event.target !== profile) && (event.target !== cart)) {
            empty_cart.style.display = "none";
        }
    });
}

function updateCart() {
    let countP = document.querySelector('.count');
    let count = parseInt(countP.textContent);
    let item_count = document.querySelector('.item-count');
    let item_total = document.querySelector('.item-total');
    if (count > 0) {
        item_count.textContent = count;
        item_total.textContent = "$" + String(count * 125) + ".00";
    }
    return count;
}

function showCart() {
    let countP = document.querySelector('.count');
    let cart = document.querySelector('.cart');
    let empty_cart = document.querySelector('.empty-cart');
    let profile = document.querySelector('.profile');

    let count = parseInt(updateCart(countP));

    if (count == 0) {
        empty_cart.style.display = 'block';
        document.addEventListener("click", function(event) {
            if ((event.target !== profile) && (event.target !== cart)) {
                empty_cart.style.display = "none";
            }
        });
    } else if (count > 0) {
        cart.style.display = 'block';
        document.addEventListener("click", function(event) {
            if ((event.target !== profile) && (event.target !== empty_cart)) {
                cart.style.display = "none";
            }
        });
    }
}