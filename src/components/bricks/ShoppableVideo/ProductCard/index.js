// @flow
import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../Picture';
import ProductBox from './ProductBox';
import ProductZoom from './ProductZoom';
import ProductInfo from './ProductInfo';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductOptions from './ProductOptions';
import LinkButton from './LinkButton';
import { Button } from '../../../basic/Button';

type Props = {
  index: number,
  entered: boolean,
  pictureLink: string,
  pictureTitle: string,
  pictureAlt: string,
  title: string,
  price: number,
  ratio: string,
  handleClick: (ev: SyntheticEvent<HTMLButtonElement>) => void,
};

class ProductCard extends React.Component<Props, {}> {
  static propTypes = {
    index: PropTypes.number.isRequired,
    entered: PropTypes.bool.isRequired,
    pictureLink: PropTypes.string.isRequired,
    pictureTitle: PropTypes.string.isRequired,
    pictureAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratio: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ratio: 'portrait_ratio5x6',
  };

  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.index !== this.props.index ||
      nextProps.pictureLink !== this.props.pictureLink ||
      nextProps.pictureTitle !== this.props.pictureTitle ||
      nextProps.pictureAlt !== this.props.pictureAlt ||
      nextProps.title !== this.props.title ||
      nextProps.price !== this.props.price ||
      nextProps.entered !== this.props.entered
    );
  }

  render() {
    const {
      index,
      entered,
      pictureLink,
      pictureTitle,
      pictureAlt,
      title,
      price,
      ratio,
      handleClick,
    } = this.props;
    return (
      <ProductBox index={index} entered={entered}>
        <ProductZoom>
          <LinkButton onClick={handleClick} ariaLabel={`Open quick view for "${title}"`}>
            <Picture
              link={pictureLink}
              ratio={ratio}
              title={pictureTitle}
              alt={pictureAlt}
              stretch
            />
          </LinkButton>
          <ProductInfo>
            <ProductName>{title}</ProductName>
            <ProductPrice>EUR {price}</ProductPrice>
          </ProductInfo>
          <ProductOptions>
            <Button onClick={handleClick}>quick view</Button>
          </ProductOptions>
        </ProductZoom>
      </ProductBox>
    );
  }
}

export default ProductCard;
