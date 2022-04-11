import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Layout/Container';
import { Box, Grid } from 'ui-kit/components/Box';
import { ModalContainer } from 'ui-kit/widgets/Modal';
import { CloseIcon } from 'ui-kit/components/Icon';
import { Typography } from 'ui-kit/components/Typography';
import { Text } from 'ui-kit/components/Text';
import config from './config';
import { getPreferredConfig } from './getPreferredConfig';
import { Login } from './types';
import WalletCard from './WalletCard';
import { LayoutCenter, majorScale, majorScalePx } from 'ui-kit/util';

const CloseIconContainer = styled.div`
	cursor: pointer;
	position: absolute;
	right: ${majorScalePx(4)};
	top: ${majorScalePx(4)};
	> svg {
		fill: ${({ theme }) => theme.colors.textHolder};
	}
`;

const ConnectModalTitleContainer = styled.div`
	${LayoutCenter};
	margin-bottom: ${majorScalePx(8)};
`;

interface Props {
	login: Login;
	onDismiss?: () => void;
	displayCount?: number;
}

export function ConnectModal({
	login,
	onDismiss = () => null,
	displayCount = 3,
}: Props) {
	const [showMore, setShowMore] = useState(false);
	const sortedConfig = getPreferredConfig(config);
	const displayListConfig = showMore
		? sortedConfig
		: sortedConfig.slice(0, displayCount);
	return (
		<ModalContainer minWidth={majorScalePx(118)}>
			<CloseIconContainer onClick={onDismiss}>
				<CloseIcon width={16} />
			</CloseIconContainer>
			<Container p={majorScale(14)}>
				<ConnectModalTitleContainer>
					<Typography variant={'h4'}>
						Connect Wallet to buy this item
					</Typography>
				</ConnectModalTitleContainer>
				<Grid gridTemplateColumns="1fr" gridRowGap={majorScalePx(4)}>
					{displayListConfig.map((wallet: any) => (
						<Box key={wallet.title}>
							<WalletCard
								walletConfig={wallet}
								login={login}
								onDismiss={onDismiss}
							/>
						</Box>
					))}
					{!showMore && false && (
						<Box onClick={() => setShowMore(true)}>
							<Text color="primary">Show more...</Text>
						</Box>
					)}
				</Grid>
			</Container>
		</ModalContainer>
	);
}
