import type { Schema, Struct } from '@strapi/strapi';

export interface NavlinkNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navlink_nav_links';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    Label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PortfolioRichTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_rich_text_blocks';
  info: {
    description: '';
    displayName: 'Rich Text Block';
    icon: 'write';
  };
  attributes: {
    rich_text: Schema.Attribute.Blocks;
  };
}

export interface PortfolioSliderBlock extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_slider_blocks';
  info: {
    description: '';
    displayName: 'Slider Block';
    icon: 'landscape';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navlink.nav-link': NavlinkNavLink;
      'portfolio.rich-text-block': PortfolioRichTextBlock;
      'portfolio.slider-block': PortfolioSliderBlock;
    }
  }
}
