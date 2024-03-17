import ProductItem from "../../components/ProductItem"
import SearchTable from "../../components/SearchTable"

//type
import { ProductType } from '../../components/ProductItem'

const product: ProductType = {
    ProductId: 1,
    BookName: "好書",
    Author: "好人",
    OriginalPrice: 500,
    DiscountPrice: 300
}

const ProductSearchPage = () => {
    return (
        <div className="page-content">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <SearchTable />
                        </div>
                        <div className="col-xl-9">
                            <div className="row">
                                { //todo
                                /* {Products.length > 0 && Product.map((product)=>{
                                    <ProductItem key={product.Id} product={product} />
                                }) 
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProductSearchPage