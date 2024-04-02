import React, { useEffect, useState } from 'react';
import BookCard from '../../../components/UsedBookListCard/BookCard';
import { useGetApiUsedBooksUserIdUserId } from '../../../API';
import backgroundImage from '../../../assets/images/main-slider/about.jpg';
import './style.css';
import '../UseBookList/style.css';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css';
import '../../../assets/css/responsive.css';
import '../../../assets/css/color.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Preloader from '../../../components/Preloader/Preloader';

const UserBooksList: React.FC<{ userId: number }> = ({ userId }) => {
  const { data, isLoading, error } = useGetApiUsedBooksUserIdUserId(userId);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 100);
    };

    // 添加滾動偵聽器
    window.addEventListener('scroll', handleScroll);

    // 清除偵聽器
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) return <Preloader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* 背景圖片和標題 */}
      <section
        className='page-title'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></section>

      <section>
        <div className='user-books-list'>
          <h1>我的上架書籍</h1>
          {data?.data.map((book) => (
            <BookCard key={book.id} usedbook={book} />
          ))}
        </div>
      </section>
      {showScrollToTop && (
        <div className='scroll-to-top1' onClick={scrollToTop}>
          <span>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>
      )}
    </div>
  );
};

export default UserBooksList;
