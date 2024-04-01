import { Link, useParams } from "react-router-dom";
import {
    useGetApiProductsGetByDetailsCategoryProductId,
    useGetApiProductsId,
} from "../../API";
import LoadingMessage from "../../main";
import { useEffect, useState } from "react";
//images
import noImage from "../../assets/images/noImage.jpg";

const ProductDetail: React.FC = () => {
    const { productId } = useParams();
    const [publishDate, setPublishDate] = useState<Date | null>(null);

    const productResponse = useGetApiProductsId(Number(productId));
    const sameCategoryBookResponse =
        useGetApiProductsGetByDetailsCategoryProductId(Number(productId));
    const product = productResponse.data?.data;
    const sameCategoryBook = sameCategoryBookResponse.data?.data;

    useEffect(() => {
        setPublishDate(new Date(product?.publishDate as string));
    }, [product]);

    if (productResponse.isLoading || sameCategoryBookResponse.isLoading) {
        return <LoadingMessage />;
    }

    return (
        <div className="bg-grey">
            <section className="content-inner-1">
                <div className="container">
                    <div className="row book-grid-row style-4 m-b60">
                        <div className="col">
                            <div className="dz-box">
                                <div
                                    className="dz-media"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "400px",
                                    }}
                                >
                                    <img
                                        src={product?.imageUrl![0] ?? noImage}
                                        alt="book"
                                        style={{
                                            height: "100%",
                                            objectFit: "contain",
                                            backgroundColor: "#FFFFFf",
                                        }}
                                    />
                                </div>
                                <div className="dz-content">
                                    <div className="dz-header">
                                        <h3 className="title">
                                            {product?.productName}
                                        </h3>
                                        {/* <div className="shop-item-rating">
                                            <div className="d-lg-flex d-sm-inline-flex d-flex align-items-center">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                </ul>
                                                <h6 className="m-b0">4.0</h6>
                                            </div>
                                            <div className="social-area">
                                                <ul className="dz-social-icon style-3">
                                                    <li>
                                                        <a
                                                            href="javascript:;"
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:;"
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:;"
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-whatsapp"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:;"
                                                            target="_self"
                                                        >
                                                            <i className="fa-solid fa-envelope"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="dz-body">
                                        <div className="book-detail">
                                            <ul className="book-info">
                                                <li>
                                                    <div>
                                                        <span>作者</span>
                                                        {product?.author}
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>出版商</span>
                                                    {product?.publisherName}
                                                </li>
                                                <li>
                                                    <span>出版日期</span>
                                                    {publishDate?.toLocaleDateString(
                                                        "zh-TW",
                                                        {
                                                            year: "numeric",
                                                            month: "2-digit",
                                                            day: "2-digit",
                                                        }
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-1">
                                            {product?.description}
                                        </p>
                                        <div className="book-footer">
                                            <div className="price">
                                                <h5>
                                                    {product?.realPrice
                                                        ? `${Math.round(
                                                              product?.realPrice as number
                                                          )} 元`
                                                        : ` ${Math.round(
                                                              product?.price as number
                                                          )} 元`}
                                                </h5>
                                                <p className="p-lr10">
                                                    {product?.realPrice
                                                        ? `${Math.round(
                                                              product?.price as number
                                                          )} 元`
                                                        : ""}
                                                </p>
                                            </div>
                                            <div className="product-num">
                                                <a
                                                    href=""
                                                    className="btn btn-primary btnhover btnhover2"
                                                >
                                                    <i className="flaticon-shopping-cart-1"></i>{" "}
                                                    <span>加入購物車</span>
                                                </a>
                                                {/* <div className="bookmark-btn style-1 d-none d-sm-block">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexCheckDefault1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefault1"
                                                    >
                                                        <i className="flaticon-heart"></i>
                                                    </label>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-8">
                            <div className="tabs-site-button">
                                <ul className="nav nav-tabs">
                                    <li>
                                        <a
                                            data-bs-toggle="tab"
                                            href=""
                                            className="active"
                                        >
                                            書籍資訊
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a data-bs-toggle="tab" href="">
                                            用戶評論
                                        </a>
                                    </li> */}
                                </ul>
                                <div className="tab-content">
                                    <div
                                        id="graphic-design-1"
                                        className="tab-pane show active"
                                    >
                                        <table className="table border book-overview">
                                            <tr>
                                                <th>品名</th>
                                                <td>{product?.productName}</td>
                                            </tr>
                                            <tr>
                                                <th>作者</th>
                                                <td>{product?.author}</td>
                                            </tr>
                                            <tr>
                                                <th>ISBN</th>
                                                <td>{product?.isbn}</td>
                                            </tr>
                                            <tr>
                                                <th>語言</th>
                                                <td>{product?.bookLanguage}</td>
                                            </tr>
                                            <tr>
                                                <th>出版日期</th>
                                                <td>
                                                    {publishDate?.toLocaleDateString(
                                                        "zh-TW",
                                                        {
                                                            year: "numeric",
                                                            month: "2-digit",
                                                            day: "2-digit",
                                                        }
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>出版商</th>
                                                <td>
                                                    {product?.publisherName}
                                                </td>
                                            </tr>
                                            <tr className="tags">
                                                <th>標籤</th>
                                                <td>
                                                    {product?.productKeywords &&
                                                    product?.productKeywords
                                                        .length > 0 ? (
                                                        product?.productKeywords.map(
                                                            (tags) => {
                                                                return (
                                                                    <a
                                                                        href="#"
                                                                        className="badge"
                                                                        key={
                                                                            tags.keywordId
                                                                        }
                                                                    >
                                                                        {
                                                                            tags.keywordName
                                                                        }
                                                                    </a>
                                                                );
                                                            }
                                                        )
                                                    ) : (
                                                        <a
                                                            href="#"
                                                            className="badge"
                                                        >
                                                            無標籤
                                                        </a>
                                                    )}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div
                                        id="developement-1"
                                        className="tab-pane"
                                    >
                                        <div
                                            className="clear"
                                            id="comment-list"
                                        >
                                            <div className="post-comments comments-area style-1 clearfix">
                                                <h4 className="comments-title">
                                                    4 COMMENTS
                                                </h4>
                                                <div id="comment">
                                                    <ol className="comment-list">
                                                        <li
                                                            className="comment even thread-even depth-1 comment"
                                                            id="comment-2"
                                                        >
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard">
                                                                    <img
                                                                        src="assets/picture/profile4.jpg"
                                                                        alt=""
                                                                        className="avatar"
                                                                    />
                                                                    <cite className="fn">
                                                                        Michel
                                                                        Poe
                                                                    </cite>{" "}
                                                                    <span className="says">
                                                                        says:
                                                                    </span>
                                                                    <div className="comment-meta">
                                                                        <a href="#">
                                                                            December
                                                                            28,
                                                                            2022
                                                                            at
                                                                            6:14
                                                                            am
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-content dlab-page-text">
                                                                    <p>
                                                                        Donec
                                                                        suscipit
                                                                        porta
                                                                        lorem
                                                                        eget
                                                                        condimentum.
                                                                        Morbi
                                                                        vitae
                                                                        mauris
                                                                        in leo
                                                                        venenatis
                                                                        varius.
                                                                        Aliquam
                                                                        nunc
                                                                        enim,
                                                                        egestas
                                                                        ac dui
                                                                        in,
                                                                        aliquam
                                                                        vulputate
                                                                        erat.
                                                                    </p>
                                                                </div>
                                                                <div className="reply">
                                                                    <a
                                                                        rel="nofollow"
                                                                        className="comment-reply-link"
                                                                        href="#"
                                                                    >
                                                                        <i className="fa fa-reply"></i>{" "}
                                                                        Reply
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <ol className="children">
                                                                <li
                                                                    className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment"
                                                                    id="comment-3"
                                                                >
                                                                    <div
                                                                        className="comment-body"
                                                                        id="div-comment-3"
                                                                    >
                                                                        <div className="comment-author vcard">
                                                                            <img
                                                                                src="assets/picture/profile3.jpg"
                                                                                alt=""
                                                                                className="avatar"
                                                                            />
                                                                            <cite className="fn">
                                                                                Celesto
                                                                                Anderson
                                                                            </cite>
                                                                            <span className="says">
                                                                                says:
                                                                            </span>
                                                                            <div className="comment-meta">
                                                                                <a href="#">
                                                                                    December
                                                                                    28,
                                                                                    2022
                                                                                    at
                                                                                    6:14
                                                                                    am
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-content dlab-page-text">
                                                                            <p>
                                                                                Donec
                                                                                suscipit
                                                                                porta
                                                                                lorem
                                                                                eget
                                                                                condimentum.
                                                                                Morbi
                                                                                vitae
                                                                                mauris
                                                                                in
                                                                                leo
                                                                                venenatis
                                                                                varius.
                                                                                Aliquam
                                                                                nunc
                                                                                enim,
                                                                                egestas
                                                                                ac
                                                                                dui
                                                                                in,
                                                                                aliquam
                                                                                vulputate
                                                                                erat.
                                                                            </p>
                                                                        </div>
                                                                        <div className="reply">
                                                                            <a
                                                                                className="comment-reply-link"
                                                                                href="#"
                                                                            >
                                                                                <i className="fa fa-reply"></i>{" "}
                                                                                Reply
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li
                                                            className="comment even thread-odd thread-alt depth-1 comment"
                                                            id="comment-4"
                                                        >
                                                            <div
                                                                className="comment-body"
                                                                id="div-comment-4"
                                                            >
                                                                <div className="comment-author vcard">
                                                                    <img
                                                                        src="assets/picture/profile2.jpg"
                                                                        alt=""
                                                                        className="avatar"
                                                                    />
                                                                    <cite className="fn">
                                                                        Ryan
                                                                    </cite>{" "}
                                                                    <span className="says">
                                                                        says:
                                                                    </span>
                                                                    <div className="comment-meta">
                                                                        <a href="#">
                                                                            December
                                                                            28,
                                                                            2022
                                                                            at
                                                                            6:14
                                                                            am
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-content dlab-page-text">
                                                                    <p>
                                                                        Donec
                                                                        suscipit
                                                                        porta
                                                                        lorem
                                                                        eget
                                                                        condimentum.
                                                                        Morbi
                                                                        vitae
                                                                        mauris
                                                                        in leo
                                                                        venenatis
                                                                        varius.
                                                                        Aliquam
                                                                        nunc
                                                                        enim,
                                                                        egestas
                                                                        ac dui
                                                                        in,
                                                                        aliquam
                                                                        vulputate
                                                                        erat.
                                                                    </p>
                                                                </div>
                                                                <div className="reply">
                                                                    <a
                                                                        className="comment-reply-link"
                                                                        href="#"
                                                                    >
                                                                        <i className="fa fa-reply"></i>{" "}
                                                                        Reply
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="comment odd alt thread-even depth-1 comment"
                                                            id="comment-5"
                                                        >
                                                            <div
                                                                className="comment-body"
                                                                id="div-comment-5"
                                                            >
                                                                <div className="comment-author vcard">
                                                                    <img
                                                                        src="assets/picture/profile1.jpg"
                                                                        alt=""
                                                                        className="avatar"
                                                                    />
                                                                    <cite className="fn">
                                                                        Stuart
                                                                    </cite>{" "}
                                                                    <span className="says">
                                                                        says:
                                                                    </span>
                                                                    <div className="comment-meta">
                                                                        <a href="#">
                                                                            December
                                                                            28,
                                                                            2022
                                                                            at
                                                                            6:14
                                                                            am
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-content dlab-page-text">
                                                                    <p>
                                                                        Donec
                                                                        suscipit
                                                                        porta
                                                                        lorem
                                                                        eget
                                                                        condimentum.
                                                                        Morbi
                                                                        vitae
                                                                        mauris
                                                                        in leo
                                                                        venenatis
                                                                        varius.
                                                                        Aliquam
                                                                        nunc
                                                                        enim,
                                                                        egestas
                                                                        ac dui
                                                                        in,
                                                                        aliquam
                                                                        vulputate
                                                                        erat.
                                                                    </p>
                                                                </div>
                                                                <div className="reply">
                                                                    <a
                                                                        rel="nofollow"
                                                                        className="comment-reply-link"
                                                                        href="#"
                                                                    >
                                                                        <i className="fa fa-reply"></i>{" "}
                                                                        Reply
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div
                                                    className="default-form comment-respond style-1"
                                                    id="respond"
                                                >
                                                    <h4
                                                        className="comment-reply-title"
                                                        id="reply-title"
                                                    >
                                                        LEAVE A REPLY
                                                        <small>
                                                            {" "}
                                                            <a
                                                                rel="nofollow"
                                                                id="cancel-comment-reply-link"
                                                                href=""
                                                                style={{
                                                                    display:
                                                                        "none",
                                                                }}
                                                            >
                                                                Cancel reply
                                                            </a>{" "}
                                                        </small>
                                                    </h4>
                                                    <div className="clearfix">
                                                        <form
                                                            method="post"
                                                            id="comments_form"
                                                            className="comment-form"
                                                        >
                                                            <p className="comment-form-author">
                                                                <input
                                                                    id="name"
                                                                    placeholder="Author"
                                                                    name="author"
                                                                    type="text"
                                                                    value=""
                                                                />
                                                            </p>
                                                            <p className="comment-form-email">
                                                                <input
                                                                    id="email"
                                                                    required
                                                                    placeholder="Email"
                                                                    name="email"
                                                                    type="email"
                                                                    value=""
                                                                />
                                                            </p>
                                                            <p className="comment-form-comment">
                                                                <textarea
                                                                    id="comments"
                                                                    placeholder="Type Comment Here"
                                                                    className="form-control4"
                                                                    name="comment"
                                                                    cols={45}
                                                                    rows={3}
                                                                    required
                                                                ></textarea>
                                                            </p>
                                                            <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                                <button
                                                                    id="submit"
                                                                    type="submit"
                                                                    className="submit btn btn-primary filled"
                                                                >
                                                                    Submit Now{" "}
                                                                    <i className="fa fa-angle-right m-l10"></i>
                                                                </button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mt-5 mt-xl-0">
                            <div className="widget">
                                <h4 className="widget-title">同分類書籍</h4>
                                <div className="row">
                                    {sameCategoryBook &&
                                    sameCategoryBook.length > 0 ? (
                                        sameCategoryBook?.map((book) => {
                                            return (
                                                <div className="col-xl-12 col-lg-6">
                                                    <div className="dz-shop-card style-5">
                                                        <div className="dz-media">
                                                            <Link
                                                                to={`/ProductDetail/${book.productId}`}
                                                            >
                                                                <img
                                                                    src={
                                                                        book?.imageUrl![0] ??
                                                                        noImage
                                                                    }
                                                                    style={{
                                                                        height: "100px",
                                                                        objectFit:
                                                                            "contain",
                                                                        backgroundColor:
                                                                            "#FFFFFF",
                                                                    }}
                                                                    alt="book"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="dz-content">
                                                            <Link
                                                                to={`/ProductDetail/${book.productId}`}
                                                            >
                                                                <h5 className="subtitle">
                                                                    {
                                                                        book.productName
                                                                    }
                                                                </h5>
                                                            </Link>

                                                            <ul className="dz-tags">
                                                                {book.productKeywords ? (
                                                                    book.productKeywords.map(
                                                                        (
                                                                            tag,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                index <
                                                                                    3 && (
                                                                                    <li>
                                                                                        {
                                                                                            tag.keywordName
                                                                                        }
                                                                                    </li>
                                                                                )
                                                                            );
                                                                        }
                                                                    )
                                                                ) : (
                                                                    <li>
                                                                        無標籤
                                                                    </li>
                                                                )}
                                                            </ul>
                                                            <div className="price">
                                                                <span className="price-num">
                                                                    {book.realPrice
                                                                        ? ` ${Math.round(
                                                                              book.realPrice as number
                                                                          )} 元`
                                                                        : ` ${Math.round(
                                                                              book.price as number
                                                                          )} 元`}
                                                                </span>
                                                                <del>
                                                                    {book.realPrice
                                                                        ? `${Math.round(
                                                                              book.price as number
                                                                          )} 元`
                                                                        : ""}
                                                                </del>
                                                            </div>
                                                            <a
                                                                href=""
                                                                className="btn btn-outline-primary btn-sm btnhover btnhover2"
                                                            >
                                                                <i className="flaticon-shopping-cart-1 me-2"></i>{" "}
                                                                加入購物車
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="col-xl-12 col-lg-6">
                                            <div className="dz-shop-card style-5">
                                                <div className="dz-content">
                                                    <h5 className="subtitle">
                                                        無相關書籍
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ProductDetail;
