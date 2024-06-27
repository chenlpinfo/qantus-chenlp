import exp from 'constants';

export interface ITicketEventsData {
  accessibility: {
    id: string;
    ticketLimit: number;
  };
  ageRestrictions: {
    id: string;
    legalAgeEnforced: boolean;
  };
  classifications: IClassificationsItem[];
  dates: {
    spanMultipleDays: boolean;
    start: {
      dateTBA: boolean;
      dateTBD: boolean;
      dateTime: string;
      localDate: string;
      localTime: string;
      noSpecificTime: boolean;
      timeTBA: boolean;
    };
    status: {
      code: string;
    };
    timezone: string;
  };
  id: string;
  images: IImagesData[];
  info?: string;
  locale: string;
  name: string;
  pleaseNote?: string;
  priceRanges: IPriceRanges[];
  products: IProducts[];

  promoters: IPromoter[];
  sales: {
    public: {
      startDateTime: string;
      startTBD: boolean;
      startTBA: string;
      endDateTime: string;
    };
    presales: IPresales[];
  };
  seatmap: {
    staticUrl: string;
    id: string;
  };
  test: string;
  ticketLimit: {
    info: string;
    id: string;
  };
  ticketing: {
    safeTix: {
      enabled: boolean;
      inAppOnlyEnabled: boolean;
    };
    allInclusivePricing: { enabled: boolean };
    id: string;
  };
  type: string;
  url: string;
  _embedded: {
    venues: IVenues[];
    attractions: IAttractions[];
  };
  _links: {
    self: { href: string };
    attractions: ILinkAttractions[];
    venues: ILinkVenues[];
  };
}

export interface IClassificationsItem {
  family: boolean;
  genre: {
    id: string;
    name: string;
  };

  primary: boolean;
  segment: {
    id: string;
    name: string;
  };
  subGenre: {
    id: string;
    name: string;
  };
  subType: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
}
export interface IImagesData {
  fallback: boolean;
  height: number;
  ratio: string;
  url: string;
  width: number;
}

export interface IPriceRanges {
  type: string;
  currency: string;
  min: number;
  max: number;
}
export interface IProducts {
  classifications: IClassificationsItem[];
  id: string;
  name: string;
  type: string;
  url: string;
}

export interface IPromoter {
  id: string;
  name: string;
  description: string;
}

export interface IPresales {
  endDateTime: string;
  name: string;
  startDateTime: string;
}

export interface IVenues {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
}

export interface IAttractions {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
}

export interface ILinkAttractions {
  href: string;
}

export interface ILinkVenues {
  href: string;
}
