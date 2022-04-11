import styled, { DefaultTheme } from 'styled-components';
import { space, layout } from 'styled-system';
import getThemeValue from 'ui-kit/util/getThemeValue';
import { Typography } from 'ui-kit/components/Typography';
import { EggTagProps } from './types';

const getBackgroundColor = ({
	backgroundColor,
	theme,
}: EggTagProps & { theme: DefaultTheme }) => {
	return getThemeValue(`colors.${backgroundColor}`, backgroundColor)(theme);
};

const EggTagComp = styled.div<EggTagProps>`
	background-color: ${getBackgroundColor};
	border-radius: 12px;
	display: inline-flex;
	padding: 4px 8px;
	${layout}
	${space}
`;

function EggTag(props: EggTagProps): JSX.Element {
	return (
		<EggTagComp {...props}>
			<Typography variant={'s3'}>{props.children}</Typography>
		</EggTagComp>
	);
}

export default EggTag;
