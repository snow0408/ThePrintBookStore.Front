import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetApiUsedBooksIsbnIsbn } from '../../API';
import backgroundImage from '../../assets/images/main-slider/about.jpg';
import logoImage from '../../assets/images/logo_dark.png';
import '../UseBookCreate/style.css'; 
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import '../../assets/css/color.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faCheck,faUser,faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



const AddUsedBook: React.FC = () => {
  const [isbn, setIsbn] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState<string>('');
  const { data, isLoading, error, refetch } = useGetApiUsedBooksIsbnIsbn(isbn);

  const handleIsbnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch(); 
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };


  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsbn(event.target.value); // 更新ISBN的值
    refetch();  
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data?.data && image) {
      const formData = new FormData();
      const title = data.data.title ?? "無";
      const kind = data.data.kind ?? "無";
      const description=data.data.description?? "無";
      const authors = data.data.authors ?? ["無"]
      formData.append('image', image);
      formData.append('title', title);
      formData.append('kind', kind);
      formData.append('description', description);
      formData.append('authors', authors.join(','));
      formData.append('price', price);
      
      if (data?.data.publisher) {
        formData.append('publisher', data?.data.publisher);
      }

      // //提交操作
      // await axios.post('/api/usedbooks', formData, { ... });
    }
  };

  return (
    
    <div>
<div className="grid-line">
        <span className="line-one"></span>
        <span className="line-two"></span>
        <span className="line-three"></span>
        <span className="line-four"></span>
    </div>




      {/* 背景圖片和標題 */}
    
      <section className="page-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="">
          <div className="content-box">
            <div className="content-wrapper">                    
              <div className="title">
                <h1>     </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* 表單和書籍資訊 */}
      
      

        <div className="check-availability">
        
        <div className="auto-container" >
        
        <div className='sidebar'>
          <div  className='search-box2' >
          <div className="sidebar-widget search-box " style={{backgroundColor:"#ffff"}}>

                              <form  method="post" action="contact.html" onSubmit={handleIsbnSubmit} >
                                
                                  <div className="form-group">
                                  <input style={{backgroundColor:"#F6F6F6"}} placeholder='請輸入書籍ISBN碼' type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                                      {/* <input type="search" name="search-field" value="" placeholder="請輸入書籍ISBN碼" required=""/> */}
                                      <button type="submit" style={{
                                        display:'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      }}
                                      >
                                        <FontAwesomeIcon  icon={faSearch} />
                                        </button>
                                      {/* //className=" icon far fa-search " */}
                                  </div>
                              </form>

          </div>
          </div>
          
        </div>
        </div>
        <section className="inside-section">
          <div>
        <div className="big-title noselect">Book</div>
        </div>
      </section>
        </div>
        

      <section className='section-one'>
<div className="auto-container pt--80 ">

      

{/* 書籍資訊渲染區 */}
{isLoading ? <div>Loading...</div> : error ? <div>查無此書</div> : (
  <div style={{backgroundColor:'#F6F6F6'}}>
  <div className="information">
    {/* 書籍資訊 */}
    <div className="sidebar-title"><h3>書籍資訊</h3></div>
    <h4 style={{color:'#171717', fontFamily:'sans-serif'}}>{data?.data?.title || "書籍名稱"}</h4>
    <hr/>
    <div className="text">{data?.data?.description || "書籍描述"}</div>
    <div className="icon"><FontAwesomeIcon icon={faUser} />&ensp;<span>{data?.data?.authors?.join(', ') || "書籍作者"}</span></div>
    <div className="icon-two"><FontAwesomeIcon icon={faBook} />&ensp;<span>{data?.data?.publisher || "書籍出版社"}</span></div>
  </div>
  </div>
)}
{/* 上傳表單 */}
<form onSubmit={handleSubmit} style={{margin:'20px'}}>
  <label>
    上傳書況圖片：
    <input type="file" onChange={handleImageUpload} />
  </label>
  <label>
    定價：
    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
  </label>
  <button type="submit" className="btn-style-one"><FontAwesomeIcon icon={faCheck} /> SEND OUT</button>
</form>
</div>

</section>




</div>




  );
};

export default AddUsedBook;
