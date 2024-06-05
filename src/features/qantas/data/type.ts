export enum SORT_BY {
  'Price high-low' = 'Price high-low',
  'Price low-high' = 'Price low-high',
  'Name ascending' = 'Name ascending',
  'Name descending' = 'Name descending',
}

export enum CANCELLATION_TYPE {
  'FREE_CANCELLATION' = 'FREE_CANCELLATION',
  'NOT_REFUNDABLE' = 'NOT_REFUNDABLE',
}
export enum RATING_TYPE {
  self = 'self',
  star = 'star',
}

export interface IRating {
  ratingValue: number;
  ratingType: RATING_TYPE;
}

export interface IHotelItem {
  id: string;
  property: {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: {
      url: string;
      caption: string;
      imageType: string;
    };
    rating: IRating;
  };
  offer: {
    promotion: {
      title: string;
      type: string;
    };
    name: string;
    displayPrice: {
      amount: number;
      currency: string;
    };
    savings?: any;
    cancellationOption: {
      cancellationType: CANCELLATION_TYPE;
    };
  };
}
