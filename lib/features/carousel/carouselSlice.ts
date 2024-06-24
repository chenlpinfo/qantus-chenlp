import { createAppSlice } from '@/lib/createAppSlice';
import { ICarouselItem } from '@/src/features/carousel/data/type';

export interface CarouselSliceState {
  selectedTv: ICarouselItem | undefined;

  currentIndex: number;
}

const initialState: CarouselSliceState = {
  selectedTv: undefined,
  currentIndex: 1,
};

export const carouselSlice = createAppSlice({
  name: 'carouselSlice',
  initialState,

  reducers: {
    setSelectedTv: (sliceState, action) => {
      sliceState.selectedTv = action.payload;
    },
    setCurrentIndex: (sliceState, action) => {
      sliceState.currentIndex = action.payload;
    },
  },
});
export const sliceCarouselActions = carouselSlice.actions;

export const selectSelectedTv = (state: any): ICarouselItem => state.carouselSlice?.selectedTv;
export const selectCurrentIndex = (state: any): number => state.carouselSlice?.currentIndex;

export default carouselSlice.reducer;
