import { capitalize } from 'lodash';
import Button from './Button';
import IconButton from './IconButton';
import { ButtonSizes, ButtonVariants } from './types';
import { SearchIcon } from 'ui-kit/components/Icon';

const index = {
	title: 'Components/Button',
	component: Button,
	argTypes: {},
};
export default index;

export const Text = () => {
	return (
		<>
			{Object.values(ButtonVariants).map((variant) => {
				return (
					<div
						key={variant}
						style={{ display: 'inline-block', marginRight: '40px' }}
					>
						{Object.values(ButtonSizes).map((size, index) => {
							return (
								<div style={{ marginTop: index ? '30px' : 0 }}>
									<div>
										<Button size={size} variant={variant}>
											{`${capitalize(variant)}`}
										</Button>
									</div>
									<div style={{ marginTop: '10px' }}>
										<Button loading size={size} variant={variant}>
											{`${capitalize(variant)}`}
										</Button>
									</div>
									<div style={{ marginTop: '10px' }}>
										<Button disabled size={size} variant={variant}>
											{`Disabled ${capitalize(variant)}`}
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</>
	);
};

export const WithIcon = () => {
	return (
		<>
			{Object.values(ButtonVariants).map((variant) => {
				return (
					<div
						key={variant}
						style={{ display: 'inline-block', marginRight: '40px' }}
					>
						{Object.values(ButtonSizes).map((size, index) => {
							return (
								<div style={{ marginTop: index ? '30px' : 0 }}>
									<div>
										<Button
											startIcon={<SearchIcon />}
											startIconSyncState
											size={size}
											variant={variant}
										>
											{`${capitalize(variant)}`}
										</Button>
									</div>
									<div style={{ marginTop: '10px' }}>
										<Button
											loading
											startIcon={<SearchIcon />}
											startIconSyncState
											size={size}
											variant={variant}
										>
											{`${capitalize(variant)}`}
										</Button>
									</div>
									<div style={{ marginTop: '10px' }}>
										<Button
											disabled
											startIcon={<SearchIcon />}
											startIconSyncState
											size={size}
											variant={variant}
										>
											{`Disabled ${capitalize(variant)}`}
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</>
	);
};

export const Icon = () => {
	return (
		<>
			{Object.values(ButtonVariants).map((variant) => {
				return (
					<div
						key={variant}
						style={{ display: 'inline-block', marginRight: '40px' }}
					>
						{Object.values(ButtonSizes).map((size, index) => {
							return (
								<div style={{ marginTop: index ? '30px' : 0 }}>
									<div>
										<IconButton
											startIconSyncState
											size={size}
											variant={variant}
										>
											<SearchIcon />
										</IconButton>
									</div>
									<div style={{ marginTop: '10px' }}>
										<IconButton
											loading
											startIconSyncState
											size={size}
											variant={variant}
										>
											<SearchIcon />
										</IconButton>
									</div>
									<div style={{ marginTop: '10px' }}>
										<IconButton disabled size={size} variant={variant}>
											<SearchIcon />
										</IconButton>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</>
	);
};
