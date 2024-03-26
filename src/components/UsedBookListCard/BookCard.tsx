// BookCard.tsx
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import '../../assets/css/color.css';
import defaultImage from '../../assets/images/defaultImage0.jpg';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserPen,
  faBookOpenReader
} from '@fortawesome/free-solid-svg-icons';
import {
  UsedBookDto,
  usePutApiUsedBooksBookId,
  useGetApiUsedBookOrdersApiBookIdBookId
} from '../../API';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';

//mui
import { styled } from '@mui/material/styles';
import { Switch, Stack, Typography } from '@mui/material';

interface BookCardProps {
  usedbook: UsedBookDto;
  usedBooksOrder: UsedBookDto;
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box'
  }
}));

const BookCard: React.FC<BookCardProps> = ({ usedbook }) => {
  const queryClient = useQueryClient();
  const [productStatus, setProductStatus] = useState(usedbook.productStatus);
  const { data } = useGetApiUsedBookOrdersApiBookIdBookId(
    usedbook.id as number
  );

  const { mutate: updateUsedBook } = usePutApiUsedBooksBookId();

  const handleStatusToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = !event.target.checked;
    updateUsedBook({
      bookId: usedbook.id as number,
      data: newStatus
    });
  };

  return (
    <div>
      <section className=''>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div
                className='image'
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  height: '260px',
                  backgroundColor: '#e8e8e8',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={usedbook.imageLinks?.thumbnail || defaultImage}
                  alt={`${usedbook.title}`}
                />
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='block-thirty-eight'>
                <div className='icon-list'>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faUserPen} />
                      <h4>Author</h4>
                      <div className='text'>
                        {usedbook.authors.join(', ') || '缺少作者資訊'}
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBookOpenReader} />
                      <h4>Publisher</h4>
                      <div className='text'>
                        {usedbook.publisher || '缺少出版商資訊'}
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClock} />
                      <h4>Release date</h4>
                      <div className='text'>{usedbook.releaseDate}</div>
                    </li>
                  </ul>
                </div>
                <h3>{usedbook.title}</h3>
                <div className='text-two'>
                  {usedbook.description || '沒有書籍介紹'}
                </div>
                <div className='inner-box'>
                  <div className='pricing'>{data?.data || '未售出'}</div>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography>下架</Typography>
                    <AntSwitch
                      checked={productStatus}
                      onChange={handleStatusToggle}
                      inputProps={{ 'aria-label': 'ant design' }}
                    />
                    <Typography>上架</Typography>
                  </Stack>

                  <a
                    href='/add-used-book'
                    className='btn-style-one'
                    style={{ marginTop: '30px' }}
                  >
                    <span>編輯書籍</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCard;
