import { IHotelItem, CANCELLATION_TYPE, IRating, RATING_TYPE } from '@/src/features/qantas/data/type';

export const mockRatingSelf: IRating = {
  ratingValue: 4.5,
  ratingType: RATING_TYPE.self,
};
export const mockRatingStar: IRating = {
  ratingValue: 3,
  ratingType: RATING_TYPE.star,
};

export const mockHotel: IHotelItem = {
  id: 'cxd650nuyo',
  property: {
    propertyId: 'P107801',
    title: 'Courtyard by Marriott Sydney-North Ryde',
    address: ['7-11 Talavera Rd', 'North Ryde'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
      imageType: 'PRIMARY',
    },
    rating: {
      ratingValue: 4.5,
      ratingType: RATING_TYPE.self,
    },
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER',
    },
    name: 'Deluxe Balcony Room',
    displayPrice: {
      amount: 329.0,
      currency: 'AUD',
    },
    savings: {
      amount: 30.0,
      currency: 'AUD',
    },
    cancellationOption: {
      cancellationType: CANCELLATION_TYPE['NOT_REFUNDABLE'],
    },
  },
};

export const mockHotelOfFreeCancellation: IHotelItem = {
  id: '5lm8loqk1s',
  property: {
    propertyId: 'P107804',
    title: 'PARKROYAL Darling Harbour Sydney',
    address: ['150 Day Street', 'Sydney'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of PARKROYAL Darling Harbour Sydney',
      imageType: 'PRIMARY',
    },
    rating: {
      ratingValue: 4.5,
      ratingType: RATING_TYPE.star,
    },
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER',
    },
    name: 'Deluxe King',
    displayPrice: {
      amount: 535.0,
      currency: 'AUD',
    },
    savings: null,
    cancellationOption: {
      cancellationType: CANCELLATION_TYPE['FREE_CANCELLATION'],
    },
  },
};
