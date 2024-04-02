import { create } from 'zustand';
import { UsedBookCartsDto } from './API';
import { ProductsPagingDto, GetApiProductsParams } from './API';

export interface paymentAmountstate {
  count: number;
  setCount: (by: number) => void;
}
export const usepaymentAmountStore = create<paymentAmountstate>()((set) => ({
  count: 0,
  setCount: (by) => set((state) => ({ count: by }))
}));

export interface usedBookCartState {
  orderFee: number;
  orderTotal: number;
  orderItem: UsedBookCartsDto[];
  setOrderFee: (by: number) => void;
  setOrderTotal: (by: number) => void;
  setOrderItem: (by: UsedBookCartsDto[]) => void;
}
export const usedUsedBookCartStore = create<usedBookCartState>()((set) => ({
  orderFee: 0,
  orderTotal: 0,
  orderItem: [],
  setOrderFee: (by) => set((state) => ({ orderFee: by })),
  setOrderTotal: (by) => set((state) => ({ orderTotal: by })),
  setOrderItem: (by) => set((state) => ({ orderItem: by }))
}));

export interface searchDataState {
  searchData: ProductsPagingDto;
  setSearchData: (newData: ProductsPagingDto) => void;
}

export interface submitDataState {
  submitData: GetApiProductsParams;
  setSubmitData: (newData: GetApiProductsParams) => void;
}

//資料搜尋結果
export const useDataState = create<searchDataState>()((set) => ({
  searchData: 0,
  setSearchData: (newData) => set({ searchData: newData })
}));

//資料篩選條件
const initialFormState: GetApiProductsParams = {
  Keyword: undefined,
  BookSearch: 10,
  PhysicalBook: 'on',
  EBook: 'on',
  PriceRangeStart: 0,
  PriceRangeEnd: 10000,
  ProductDetailsCategoryId: 0,
  Page: 1,
  pageSize: 9
};

export const useSubmitDataState = create<submitDataState>()((set) => ({
  submitData: initialFormState,
  setSubmitData: (newData) => set({ submitData: newData })
}));
