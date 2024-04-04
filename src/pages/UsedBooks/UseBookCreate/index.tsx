import React, { useState, useEffect } from 'react';
import {
  usePostApiUsedBooks,
  useGetApiUsedBooksIsbnIsbn,
  PostApiUsedBooksBody
} from '../../../API';
import defaultImage2 from '../../../assets/images/no image available.png';
import backgroundImage from '../../../assets/images/main-slider/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import decorate from '../../../assets/images/resource/decorate.jpg';
import { Link } from 'react-router-dom';
import {
  faSearch,
  faCheck,
  faUser,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import '../UseBookCreate/Creatstyle.css';
import '../../../assets/css/style.css';
import '../../../assets/css/responsive.css';
import '../../../assets/css/color.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad'
];

const StepContent1 = () => {
  // 第一步的内容
  return <div>第一步的内容...</div>;
};

const StepContent2 = () => {
  // 第二步的内容
  return <div>第二步的内容...</div>;
};

const StepContent3 = () => {
  // 第三步的内容
  return <div>第三步的内容...</div>;
};

const AddUsedBook: React.FC = () => {
  const [isbn, setIsbn] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState('');
  const [otherText, setOtherText] = useState('');
  const [activeStep, setActiveStep] = useState(0); // 增加此行来声明 activeStep
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  //步驟
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepContent1 />;
      case 1:
        return <StepContent2 />;
      case 2:
        return <StepContent3 />;
      default:
        return <div>未知步骤</div>;
    }
  };

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

  //下拉選單選擇書況

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOtherInputChange = (event) => {
    setOtherText(event.target.value);
  };

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

    const uploadData: PostApiUsedBooksBody = {};

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
  function addNewLines(str, maxLineLength) {
    let result = '';
    while (str.length > maxLineLength) {
      result += str.substring(0, maxLineLength) + '\n';
      str = str.substring(maxLineLength);
    }
    result += str; // 添加剩餘的字符串（如果有）
    return result;
  }
  function getDescription(usedbook) {
    if (!usedbook.description) return '沒有書籍介紹';
    if (usedbook.description.length > 150) {
      return addNewLines(usedbook.description.substring(0, 100), 50) + '...';
    }
    return addNewLines(usedbook.description, 50);
  }
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
              <div
                className='search-box2 row justify-content-center '
                style={{
                  marginTop: '0px',
                  position: 'relative',
                  top: '-50px',
                  borderRadius: '10px'
                }}
              >
                <div
                  className='sidebar-widget search-box col-lg-6'
                  style={{
                    backgroundColor: '#efefef',
                    width: '400px',
                    borderRadius: '15px 0px 0px 0px'
                  }}
                >
                  <div className='form-group'>
                    <input
                      name='isbn'
                      style={{ backgroundColor: '#ffff' }}
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
                <div
                  className='col-lg-6'
                  style={{
                    backgroundImage: `url(${decorate})`,
                    height: '142px',
                    display: 'flex',
                    borderRadius: '0px 0px 15px 0px'
                  }}
                >
                  <p
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 'normal',
                      margin: '50px',
                      justifyContent: 'center'
                    }}
                  >
                    請先輸入ISBN碼，不需要輸入書籍名稱系統會自動帶出書籍資訊
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 書籍資訊渲染及圖片上傳表單部分... */}

        <section className='section-fourty-eight'>
          <div className='auto-container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <div className='block-fourty-eight'>
                  <div className='sub-title'>Book information</div>
                  <div className='sidebar-title'>
                    <h3>書籍資訊</h3>
                  </div>
                  <h4
                    className=' mb-30px'
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      fontFamily: 'serif'
                    }}
                  >
                    {' '}
                    {data?.data?.title || '書籍名稱'}
                  </h4>
                  <br />
                  {/* <div className='text'>
                    Check out Hotels Downtown Seattle. Save Time, and Find it{' '}
                  </div> */}
                  <ul style={{ padding: '0px' }}>
                    <li>
                      <FontAwesomeIcon icon={faUser} />
                      <span>
                        &ensp;{data?.data?.authors?.join(', ') || '書籍作者'}
                      </span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBook} />
                      <span>
                        {' '}
                        &ensp;{data?.data?.publisher || '書籍出版社'}
                      </span>
                    </li>
                  </ul>
                  <div
                    className={`text-two ${
                      data?.data?.description &&
                      data.data.description.length > 200
                        ? 'text-scrollable'
                        : ''
                    }`}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {data?.data?.description || '書籍描述'}
                  </div>

                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type='text'
                    className='form-control'
                    name='price'
                    value={price}
                    placeholder='輸入二手書販售金額'
                    required
                  ></input>

                  <select
                    className='select-style'
                    name='statue'
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value=''>請選擇書況</option>
                    <option value='option1'>全新</option>
                    <option value='option2'>九成新</option>
                    <option value='option2'>有污漬、折損</option>
                    <option value='option3'>有做筆記</option>
                    <option value='option3'>有作家簽名</option>
                    <option value='other'>其他</option>
                  </select>
                  {selectedOption === 'other' && (
                    <input
                      name='otherText'
                      type='text'
                      value={otherText}
                      onChange={handleOtherInputChange}
                      placeholder='請說明其他書況'
                    />
                  )}

                  <button
                    style={{ marginTop: '20px' }}
                    type='submit'
                    className='btn-style-one'
                  >
                    <FontAwesomeIcon icon={faCheck} /> SEND OUT
                  </button>
                </div>
              </div>
              <div
                className='col-lg-6'
                style={{
                  backgroundColor: '#FBF4EE',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '500px',
                  height: '500px',
                  borderRadius: '10px'
                }}
              >
                <img
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%'
                  }}
                  src={data?.data?.imageLinks?.thumbnail || defaultImage2}
                  alt={`${data?.data?.title}`}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
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
        </section>
      </form>
    </div>
  );
};

export default AddUsedBook;
