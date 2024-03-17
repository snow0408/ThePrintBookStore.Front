import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse'
import { useGetApiProducts } from '../../API';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchFilter() {
    const [productCategorys, setProductCategorys] = useState([]);

    const TestData = useGetApiProducts();


    useEffect(() => {
        if (TestData.isSuccess)
            console.log(TestData.data?.data)

        // axios.get('https://localhost:7236/api/Products')
        //   .then(res => {
        //     setProductCategorys(res.data);
        //   })
        //   .catch(error => {
        //     console.error("Error fetching data: ", error);
        //   });
    }, []); // 空依賴數組意味著此效果只在組件掛載時運行一次


    return (
        <div>
            <div className="mb-2">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    搜尋欄位
                </InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'searchColumn',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>全部</option>
                    <option value={20}>書名/品名</option>
                    <option value={30}>作者</option>
                    <option value={40}>出版商/製造商/代理商</option>
                    <option value={50}>關鍵詞</option>
                </NativeSelect>

            </div>
            <div className="mb-2">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    商品分類
                </InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'searchColumn',
                        id: 'uncontrolled-native',
                    }}
                >
                    {productCategorys.map((productCategory, index) => {
                        return (<option key={index} value={productCategory}>{productCategory}</option>)
                    })}
                </NativeSelect>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'searchColumn',
                        id: 'uncontrolled-native',
                    }}
                >

                </NativeSelect>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'searchColumn',
                        id: 'uncontrolled-native',
                    }}
                >

                </NativeSelect>
            </div>
            <div className="mb-2">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    售價
                </InputLabel>
                <TextField className="w-25 me-2" type="number" id="outlined-basic" label="最小金額" size="small" variant="outlined" />
                <TextField className="w-25" type="number" id="outlined-basic" label="最大金額" size="small" variant="outlined" />
            </div>

            <div className="mb-2">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    出版日期
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="me-2 col-4" /><DatePicker className="col-4" />
                </LocalizationProvider>
            </div>

        </div>
    )

}

function SearchTable() {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <div className="d-flex flex-column">
            {/* <div className="mb-2"> */}
            <div style={{ width: 500 }}>
                <TextField className="h-100" id="outlined-basic" label="搜尋" variant="outlined" />
                <Button variant="contained" className='border border-1 h-100' onClick={handleChange}>進階搜尋</Button>
                <Button variant="contained" className='border border-1 h-100'  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </div>
            
            <div className="border" style={{ width: 500 }}>
                <Collapse in={checked}>
                    <SearchFilter></SearchFilter>
                </Collapse>
            </div>
        </div>
    );
}

export default SearchTable