import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategoty,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>VIC_404</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com TSX REACT.
          </StreamDescription>

          <StreamCategoty numberOfLines={1}>
            Science and Tecnology
          </StreamCategoty>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>English</TagText>
          </TagView>
          <TagView>
            <TagText>DEV</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
