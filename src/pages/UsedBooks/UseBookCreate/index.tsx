import React, { useState, useEffect } from 'react';
import { usePostApiUsedBooks, useGetApiUsedBooksIsbnIsbn } from '../../../API';
import backgroundImage from '../../../assets/images/main-slider/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCheck,
  faUser,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import '../UseBookCreate/style.css';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css';
import '../../../assets/css/responsive.css';
import '../../../assets/css/color.css';

const AddUsedBook: React.FC = () => {
  const [isbn, setIsbn] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  //取得書籍API
  const {
    data,
    isLoading: isDataLoading,
    error: dataError,
    refetch
  } = useGetApiUsedBooksIsbnIsbn(isbn);
  //新增書籍API
  const {
    mutate: addUsedBook,
    isLoading: isAdding,
    error: addError
  } = usePostApiUsedBooks();

  //圖片處理
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview('');
    }
  }, [image]);

  //點擊div圖片上傳
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUploadClick = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput?.click();
  };

  //表單提交
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data?.data || !image) {
      console.error('必要的資訊不完整');
      return;
    }

    const formData = new FormData(e.currentTarget);
    console.log('price', formData.get('price'));
    console.log('isbn', formData.get('isbn'));
    console.log('imageFile', formData.get('imageFile'));

    const uploadData:
    // 根據實際 API 需求添加其他必要資訊

    // addUsedBook(formData, {
    //   onSuccess: () => {
    //     // 處理成功情況
    //     console.log('二手書添加成功');
    //   },
    //   onError: (error) => {
    //     // 處理錯誤情況
    //     console.error('添加二手書失敗', error);
    //   }
    // });
  };

  return (
    <div>
      <div className='grid-line'>
        <span className='line-one'></span>
        <span className='line-two'></span>
        <span className='line-three'></span>
        <span className='line-four'></span>
      </div>

      <section
        className='page-title'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></section>

      <form onSubmit={handleSubmit}>
        <div className='check-availability'>
          <div className='auto-container'>
            <div className='sidebar'>
              <div className='search-box2'>
                <div
                  className='sidebar-widget search-box'
                  style={{ backgroundColor: '#ffff' }}
                >
                  <div className='form-group'>
                    <input
                      name='isbn'
                      style={{ backgroundColor: '#F6F6F6' }}
                      placeholder='請輸入書籍ISBN碼'
                      type='text'
                      value={isbn}
                      onChange={(e) => setIsbn(e.target.value)}
                      onBlur={() => refetch()}
                    />
                    <button
                      name='search'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 書籍資訊渲染及圖片上傳表單部分... */}
        <section className='section-one'>
          <div className='auto-container pt--80 '>
            {isDataLoading ? (
              <div>Loading...</div>
            ) : dataError ? (
              <div>查無此書</div>
            ) : (
              <div style={{ backgroundColor: '#F6F6F6' }}>
                <div className='information'>
                  <div className='sidebar-title'>
                    <h3>書籍資訊</h3>
                  </div>
                  <h4 style={{ color: '#171717', fontFamily: 'sans-serif' }}>
                    {data?.data?.title || '書籍名稱'}
                  </h4>
                  <hr />
                  <div className='text'>
                    {data?.data?.description || '書籍描述'}
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faUser} />
                    &ensp;
                    <span>{data?.data?.authors?.join(', ') || '書籍作者'}</span>
                  </div>
                  <div className='icon-two'>
                    <FontAwesomeIcon icon={faBook} />
                    &ensp;<span>{data?.data?.publisher || '書籍出版社'}</span>
                  </div>
                </div>
              </div>
            )}
            {/* {/ 上傳表單 /} */}
            <div>
              <div className='upload-area' onClick={handleImageUploadClick}>
                {preview ? (
                  <img src={preview} alt='預覽圖片' className='image-preview' />
                ) : (
                  <div className='image-placeholder'>點擊此處上傳圖片</div>
                )}
                <input
                  id='fileInput'
                  type='file'
                  name='imageFile'
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <label>
              定價：
              <input
                name='price'
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <button type='submit' className='btn-style-one'>
              <FontAwesomeIcon icon={faCheck} /> SEND OUT
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddUsedBook;
