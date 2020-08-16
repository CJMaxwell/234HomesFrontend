import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';

interface Props {
  imgUrl?: string;
  height?: string;
  width?: string;
  logo?: string;
  ad?: boolean;
}

const Wrapper = styled.section`
  cursor: pointer;
  .title {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 1.2rem;
  }
  .description {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
  .view-num,
  .vendor-loc {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray20};
  }
  .loc-pin {
    height: 0.9rem;
    width: 0.65rem;
  }
  .view {
    width: 1.15rem;
    height: 0.7rem;
  }
  .price {
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 1.2rem;
  }
  .logo {
    display: inline-block;
    height: 4.7rem;
    width: 6.2rem;
    border: 1px solid ${({ theme }) => theme.colors.gray21};
    padding: 0.45rem 1.15rem;
  }
`;

const ProductImg = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 13.05rem;
  width: 13.55rem;
  overflow: hidden;

  .ad {
    width: 4.55rem;
    height: 2.05rem;
    background-color: ${({ theme }) => theme.colors.orange1};
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 0px 1.1rem 1.1rem 0px;
    
  }
`;

const MostViewedProducts: React.FC<Props> = ({
  imgUrl = '',
  height = '',
  width = '',
  logo = '',
  ad = false,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Link href="/single-product">
      <Wrapper className="w-full flex border border-gray-400 p-4">
        <ProductImg imgUrl={imgUrl} height={height} width={width}>
          {ad ? <div className="ad text-white relative py-2 px-4">Top Ad</div> : <div />}
        </ProductImg>
        <div className="pl-8 pr-32">
          <div>
            <h1 className="title font-semibold capitalize text-xl">
              Lorem ipsum dolor sit amet, consetetur
            </h1>
            <p className="pt-6 description">
              Sed ut perspiciatis unde omnis <br /> iste natus error sit voluptatem...
            </p>
          </div>
          <div className="pt-8 flex items-center">
            <div className="flex items-center pr-8">
              <img src="/img/pro-loc-sign.svg" className="loc-pin" alt="Location pin" />
              <p className="pl-2 vendor-loc">Shomolu, Home Accessories</p>
            </div>
            <div className="flex items-center">
              <img src="/img/views.svg" className="view" alt="Location pin" />
              <p className="pl-2 view-num">345</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </Link>
  );
};

export default MostViewedProducts;
