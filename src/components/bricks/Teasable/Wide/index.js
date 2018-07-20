// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import PictureBox from './PictureBox';
import Subtitle from './Subtitle';
import TextBox from './TextBox';
import TextBoxWrapper from './TextBoxWrapper';
import Picture from '../../Picture';
import CTA from '../../CTA';
import { TeaserBox } from '../../../basic/Box';
import { OptionalLink } from '../../../basic/Link';
import Strings from '../../../../l18n';
import type { Teaser } from '../../../../types';

const composeContent = ({
  url,
  pictureLink,
  pictureTitle,
  pictureAlt,
  title,
  text,
  params,
}: Teaser): React.Node => {
  const color = params && params.color;
  const content = [];
  if (pictureLink) {
    content.push(
      <PictureBox key="picturebox">
        <Picture
          key="picture"
          link={pictureLink}
          ratio="landscape_ratio3x2"
          title={pictureTitle}
          alt={pictureAlt}
          color={color}
          stretch={true}
        />
      </PictureBox>
    );
  }
  if (title || text || (params && params.ctaShow)) {
    content.push(
      <TextBox key="textbox" color={color}>
        <TextBoxWrapper>
          {title && <Title color={color}>{title}</Title>}
          {text && (
            <Subtitle color={color}>
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </Subtitle>
          )}
          {params &&
            params.ctaShow &&
            !!url && (
              <CTA
                color={color}
                label={
                  params && params.ctaText ? params && params.ctaText : Strings.teaser_cta_text
                }
              />
            )}
        </TextBoxWrapper>
      </TextBox>
    );
  }
  return content;
};

const WideTeaserBrick = ({
  url,
  pictureLink,
  pictureTitle,
  pictureAlt,
  title,
  text,
  params = {},
}: Teaser) => {
  return (
    <OptionalLink url={url}>
      <TeaserBox>
        {composeContent({ url, pictureLink, pictureTitle, pictureAlt, title, text, params })}
      </TeaserBox>
    </OptionalLink>
  );
};

WideTeaserBrick.propTypes = {
  url: PropTypes.string,
  pictureLink: PropTypes.string,
  pictureTitle: PropTypes.string,
  pictureAlt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  params: PropTypes.shape({
    color: PropTypes.string,
    ctaShow: PropTypes.bool,
    ctaText: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default WideTeaserBrick;
