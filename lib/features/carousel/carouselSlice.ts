import { createAppSlice } from '@/lib/createAppSlice';
import { ICarouselItem } from '@/src/features/carousel/data/type';

export interface CarouselSliceState {
  selectedTv: ICarouselItem | undefined;
}

const initialState: CarouselSliceState = {
  selectedTv: undefined,
};

export const carouselSlice = createAppSlice({
  name: 'carouselSlice',
  initialState,

  reducers: {
    setSelectedTv: (sliceState, action) => {
      sliceState.selectedTv = action.payload;
    },
  },
});
export const sliceCarouselActions = carouselSlice.actions;

export const selectSelectedTv = (state: any): ICarouselItem => state.carouselSlice?.selectedTv;

export default carouselSlice.reducer;
