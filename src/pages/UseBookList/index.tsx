import React from 'react';
import BookCard from '../../components/UsedBookListCard/BookCard'; 
import { useGetApiUsedBooksUserIdUserId } from '../../API';
import backgroundImage from '../../assets/images/main-slider/about.jpg';
import './style.css';
import '../UseBookCreate/style.css'; 
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import '../../assets/css/color.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const UserBooksList: React.FC<{ userId: number }> = ({ userId }) => {
  const { data, isLoading, error,isSuccess } = useGetApiUsedBooksUserIdUserId(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if(isSuccess)console.log(data.data)

  if (!Array.isArray(data?.data)) {
    console.error('data.data is not an array', data?.data);
    return <div>發生錯誤：返回的數據不是數組</div>;
  }

  return (

<div>
    
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


    <section>
    <div className="user-books-list">
      <h1>我的上架書籍</h1>
      {data.data.map((book) => (
        <BookCard
          key={book.id}
          usedbook={book}
        //   id={book.id}
        //   title={book.title || "書籍名稱"}
        //   authors={book.authors || ['未知作者']} 
        //   publisher={book.publisher || '未知出版社'}
        //   publishDate={book.publishedDate || '未知出版日期'}
        //   description={book.description || '沒有描述'}
        //   image={book.imageLinks?.thumbnail || '沒有'} 
        />
      ))}
    </div>
    </section>
 </div>
    
  );
  
};

export default UserBooksList;

