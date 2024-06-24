import { createAppSlice } from '@/lib/createAppSlice';
import { ICarouselItem } from '@/src/features/carousel/data/type';

export interface CarouselSliceState {
  carouselData: ICarouselItem[];

  currentIndex: number;
}

const initialState: CarouselSliceState = {
  carouselData: [],
  currentIndex: 1,
};

export const carouselSlice = createAppSlice({
  name: 'carouselSlice',
  initialState,

  reducers: {
    setCarouselData: (sliceState, action) => {
      sliceState.carouselData = action.payload;
    },
    setCurrentIndex: (sliceState, action) => {
      sliceState.currentIndex = action.payload;
    },
  },
});
export const sliceCarouselActions = carouselSlice.actions;

export const selectCarouselData = (state: any): ICarouselItem[] => state.carouselSlice?.carouselData;
export const selectCurrentIndex = (state: any): number => state.carouselSlice?.currentIndex;

export default carouselSlice.reducer;
