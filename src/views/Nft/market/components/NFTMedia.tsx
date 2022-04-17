import { Box, BoxProps } from "ui-kit";
import { FC } from "react";
import { NftToken } from "state/nftMarket/types";
import styled from "styled-components";
import { RoundedImage } from "../Collection/IndividualNFTPage/shared/styles";

const StyledAspectRatio = styled(Box)`
  position: absolute;
  inset: 0;
`;

export const AspectRatio = ({ ratio, children, ...props }) => (
  <Box
    width="100%"
    height={0}
    pb={`${100 / ratio}%`}
    position="relative"
    {...props}
  >
    <StyledAspectRatio>{children}</StyledAspectRatio>
  </Box>
);

const NFTMedia: FC<
  {
    nft?: NftToken;
    as?: any;
    width: number;
    height: number;
  } & Omit<BoxProps, "width" | "height" | "as">
> = ({ width, height, nft, borderRadius = "default", as, ...props }) => {

  return (
    <RoundedImage
      width={width}
      height={height}
      src={nft?.image.gif || nft?.image.thumbnail}
      alt={nft?.name}
      as={as}
      {...props}
    />
  );
};

export default NFTMedia;
