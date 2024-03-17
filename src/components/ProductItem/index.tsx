import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import fillStar from '../../assets/picture/fill-star.png'
import emptyStar from '../../assets/picture/empty-star.png'
import productImg from '../../assets/picture/list-img-1.png'

export type ProductType = {
    ProductId: number;
    BookName: string;
    Author: string;
    OriginalPrice: number;
    DiscountPrice: number;
}
export interface ProductItemProps {
    product: ProductType | null
}



const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="book-card mb-24">
                <a href="product-detail.html"><img src={productImg} alt="" /></a>
                <div className="">
                    <ul className="unstyled hover-buttons">
                        <li><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEye} /></a></li>
                    </ul>
                </div>
                <div className="book-content">
                    <h5 className="mt-24"><a href="product-detail.html">{product?.BookName}</a></h5>
                    <div className="rating-stars">
                        <a href="#"><img src={fillStar} alt="" /></a>
                        <a href="#"><img src={fillStar} alt="" /></a>
                        <a href="#"><img src={fillStar} alt="" /></a>
                        <a href="#"><img src={fillStar} alt="" /></a>
                        <a href="#"><img src={emptyStar} alt="" /></a>
                    </div>
                    <h6 className="dark-gray">{product?.Author}</h6>
                    <div className="books-price">
                        <h5>{product?.OriginalPrice}</h5>
                        <h6 className="old-price">{product?.DiscountPrice}</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductItem;