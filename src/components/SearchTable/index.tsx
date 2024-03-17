//react router
import { Form } from 'react-router-dom'
//react
import { useState } from 'react';

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
//mui
import { Slider, Input, Select, InputLabel, MenuItem, FormControl } from '@mui/material';

export async function SearchAction({ request }) {


}



const SearchTable: React.FC = () => {
    const [value, setValue] = useState<number[]>([10, 10000]);
    const [bookSearch, setBookSearch] = useState<number>(10);

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - 10), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + 10)]);
        }
    };
    const handlePrice1InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = [...value];
        newValue[0] = event.target.value === '' ? 0 : Number(event.target.value)
        setValue(newValue);
    };
    const handlePrice2InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = [...value];
        newValue[1] = event.target.value === '' ? 0 : Number(event.target.value)
        setValue(newValue);
    };
    const handlePrice1Blur = () => {
        const newValue = [...value];
        if (value[0] < 10) {
            newValue[0] = 10;
            setValue(newValue);
        } else if (value[0] > 10000) {
            newValue[0] = 10000;
            setValue(newValue);
        }
    };
    const handlePrice2Blur = () => {
        const newValue = [...value];
        if (value[1] < 10) {
            newValue[1] = 10;
            setValue(newValue);
        } else if (value[1] > 10000) {
            newValue[1] = 10000;
            setValue(newValue);
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar mb-48">
                <div className="sidebar-block">
                    <div className="filters">
                        <Form method="POST" >
                            <div className="filter-block">
                                <h4 className="mb-24">搜尋</h4>
                                <FormControl fullWidth className="mb-4" sx={{
                                    '& .MuiInputLabel-outlined.Mui-focused': {
                                        color: "#FA9A41", // 聚焦時InputLabel的文字顏色
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: "#FA9A41", // 焦點時Select外框顏色
                                    }
                                }}>
                                    <InputLabel id="demo-simple-select-label" >查詢條件</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={bookSearch}
                                        label="查詢條件"
                                        onChange={(event) => { setBookSearch(event.target.value as number); }}
                                    >
                                        <MenuItem value={10}>全部</MenuItem>
                                        <MenuItem value={20}>書名</MenuItem>
                                        <MenuItem value={30}>作者</MenuItem>
                                        <MenuItem value={40}>出版商</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className="form-group has-search">
                                    <input type="text" className="form-control" placeholder="書籍搜尋" />
                                    <button type="submit" className="b-unstyle">
                                        <i>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className="filter-block">
                                <div className="title mb-32">
                                    <h5>庫存</h5>
                                    <i><FontAwesomeIcon icon={faMinus} /></i>
                                </div>
                                <ul className="unstyled list">
                                    <li className="mb-16">
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="Instock" />
                                            <label htmlFor="Instock">有庫存</label>
                                        </div>
                                        <h6 className="dark-gray">(02)</h6>
                                    </li>
                                    <li>
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="Outofstock" />
                                            <label htmlFor="Outofstock">無庫存</label>
                                        </div>
                                        <h6 className="dark-gray">(02)</h6>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className="filter-block">
                                <div className="title mb-32">
                                    <h5>價格範圍</h5>
                                    <i><FontAwesomeIcon icon={faMinus} /></i>
                                </div>
                                <div className="slider-track">
                                    <div className="d-flex justify-content-between mb-4p">
                                        <h5><span className='me-1'>NT</span>
                                            <Input
                                                value={value[0]}
                                                size="small"
                                                onChange={handlePrice1InputChange}
                                                onBlur={handlePrice1Blur}
                                                inputProps={{
                                                    min: 0,
                                                    max: 10000,
                                                    type: 'number',
                                                }}
                                                sx={{
                                                    '&:after': { // 聚焦時的底線顏色
                                                        borderBottomColor: '#FA9A41', // 更改為你想要的顏色
                                                    }
                                                }}
                                            />
                                        </h5>
                                        <h5><span className='me-1'>NT</span>
                                            <Input
                                                value={value[1]}
                                                size="small"
                                                onChange={handlePrice2InputChange}
                                                onBlur={handlePrice2Blur}
                                                inputProps={{
                                                    min: 0,
                                                    max: 10000,
                                                    type: 'number',
                                                }}
                                                sx={{
                                                    '&:after': { // 聚焦時的底線顏色
                                                        borderBottomColor: '#FA9A41', // 更改為你想要的顏色
                                                    }
                                                }}
                                            />
                                        </h5>
                                    </div>
                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        min={10}
                                        max={10000}
                                        disableSwap
                                        style={{ color: "#FA9A41" }}
                                    />

                                    {/* <input type="text" className="js-slider form-control" value="0" /> */}
                                </div>
                            </div>
                            <hr />
                            <div className="filter-block">
                                <div className="title mb-32">
                                    <h5>書籍分類</h5>
                                    <i><FontAwesomeIcon icon={faMinus} /></i>
                                </div>
                                <ul className="unstyled list">
                                    <li className="mb-16">
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="Biography" />
                                            <label htmlFor="Biography">Biography</label>
                                        </div>
                                        <h6 className="dark-gray">(02)</h6>
                                    </li>

                                    <ul id="more-categories" className="accordion-collapse collapse unstyled list" data-bs-parent="#accordionExample">
                                        <li className="mb-16">
                                            <div className="filter-checkbox">
                                                <input type="checkbox" id="Bio-graphy" />
                                                <label htmlFor="Bio-graphy">Biography</label>
                                            </div>
                                            <h6 className="dark-gray">(02)</h6>
                                        </li>
                                    </ul>
                                    <a href="#" className="accordion-button load-more-btn" data-bs-toggle="collapse" data-bs-target="#more-categories" aria-expanded="true">顯示更多</a>
                                </ul>
                            </div>
                            <hr />
                            <div className="filter-block">
                                <div className="title mb-32">
                                    <h5>語言</h5>
                                    <i><FontAwesomeIcon icon={faMinus} /></i>
                                </div>
                                <ul className="unstyled list">
                                    <li className="mb-16">
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="chinese" />
                                            <label htmlFor="chinese">中文</label>
                                        </div>
                                        <h6 className="dark-gray">(02)</h6>
                                    </li>
                                    <li className="mb-16">
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="english" />
                                            <label htmlFor="english">英文</label>
                                        </div>
                                        <h6 className="dark-gray">(04)</h6>
                                    </li>
                                    <li className="mb-16">
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="Japanese" />
                                            <label htmlFor="Japanese">日文</label>
                                        </div>
                                        <h6 className="dark-gray">(06)</h6>
                                    </li>
                                    <li className="mb-16">
                                        <div className="filter-checkbox">
                                            <input type="checkbox" id="spanish" />
                                            <label htmlFor="spanish">西班牙文</label>
                                        </div>
                                        <h6 className="dark-gray">(06)</h6>
                                    </li>
                                </ul>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default SearchTable;
