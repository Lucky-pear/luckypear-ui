/** @jsx jsx */
import { useMemo } from 'react';
import { jsx } from '@emotion/core';
import styled from "../styles/theme";
import Text, { TextProps } from './Text';
import { BaseProps } from './Base';

export interface CardProps extends BaseProps {
  /** `title` is a label that displays on top of the card */
  title: string
  /** `titleProps` is additional properties for `title`. */
  titleProps?: TextProps
  /** `desc`(description) is detailed texts for card */
  desc?: string
  /** `descProps`is additional properties for `desc`. */
  descProps?: TextProps
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding-top: 3rem;
  padding-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-radius: 8px;
  max-width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;
const Title = styled(Text)`
  margin-bottom: 3em;
`;
const Description = styled(Text)`
`;

/** 
 * `Card` component is a component that displays datas. 
 **/
const Card: React.FC<CardProps> = ({
  children,
  title,
  titleProps,
  desc,
  descProps,
  ...props
}) => {
  return (
    <Container
    >
      <Title
        type="title"
        size="medium"
        {...titleProps}
      >
        {title}
      </Title>
      {desc &&
        <Description
          {...descProps}
        >
          {desc}
        </Description>
      }
    </Container>
  );
};

export default Card;
