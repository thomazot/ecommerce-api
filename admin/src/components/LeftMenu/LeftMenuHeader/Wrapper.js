import styled, { css } from 'styled-components';

import Logo from '../../../assets/images/logo-dark.svg';

const Wrapper = styled.div`
  ${({ theme }) => css`
  background-color: ${theme.main.colors.leftMenu['background-header-link']};
  padding-left: 2rem;
  height: ${theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 2.5rem;
  }

  `}
`;

export default Wrapper;
