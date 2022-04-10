import { SubMenuItem } from './types';
import { AppUrl } from 'configs/constants/common';

export const SubMenuItems: Array<SubMenuItem> = [
	{
		text: 'HOME',
		onClick: () => {
			window.location.href = AppUrl.HOME as string;
		},
	},
	{
		text: 'CLAIM',
		onClick: () => {
			window.location.href = AppUrl.MARKETPLACE as string;
		},
	},
	{
		text: 'WHITE PAPER',
		onClick: () => {
			window.location.href = AppUrl.WHITE_PAPER as string;
		},
	}
];
