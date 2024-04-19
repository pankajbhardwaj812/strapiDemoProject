import type { Schema, Attribute } from '@strapi/strapi';

export interface BuyBuycar extends Schema.Component {
  collectionName: 'components_buy_buycars';
  info: {
    displayName: 'buybutton';
    icon: 'car';
    description: '';
  };
  attributes: {
    ButtonName: Attribute.String & Attribute.Required;
    backgroundColor: Attribute.String & Attribute.Required;
    TextColor: Attribute.String;
    height: Attribute.String;
    width: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buy.buycar': BuyBuycar;
    }
  }
}
