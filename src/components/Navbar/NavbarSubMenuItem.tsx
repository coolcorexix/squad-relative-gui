import styled from 'styled-components';
import { DynamicTypography } from 'components/Typography';
import { NavbarSubMenuItemProps } from './types';
import { majorScalePx } from '../utils';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

const NavbarSubMenuItemContainer = styled.div<
	TypographyProps &
		SpaceProps & {
			styles: any;
		}
>`
	padding: 0 ${majorScalePx(5)};
	white-space: nowrap;

	&:hover {
		cursor: pointer;
	}
	${space};
	${typography};
`;

function NavbarSubMenuItem(props: NavbarSubMenuItemProps): JSX.Element {
	const { item, textColor } = props;
	return (
		<NavbarSubMenuItemContainer {...props} styles={item.styles}>
			<DynamicTypography variants={{ xs: 'h3', sm: 'h5' }} color={textColor}>
				{item.text}
			</DynamicTypography>
		</NavbarSubMenuItemContainer>
	);
}

export default NavbarSubMenuItem;
