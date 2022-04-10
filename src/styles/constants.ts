import { majorScalePx } from "components/utils";
import { css, DefaultTheme } from "styled-components";

export const PaddingX = majorScalePx(40);

export const PaddingXResponsive = css`
	padding-left: ${majorScalePx(4)};
	padding-right: ${majorScalePx(4)};
	${({ theme }: { theme: DefaultTheme }) => theme.mediaQueries.sm} {
		padding-left: ${majorScalePx(40)};
		padding-right: ${majorScalePx(40)};
	}
`;