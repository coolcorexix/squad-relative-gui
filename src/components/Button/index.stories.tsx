import { capitalize } from 'lodash';
import Button from './Button';
import { ButtonVariants } from './types';

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
						<div style={{ marginTop: index ? '30px' : 0 }}>
							<div>
								<Button variant={variant}>{`${capitalize(variant)}`}</Button>
							</div>
							<div style={{ marginTop: '10px' }}>
								<Button variant={variant}>{`${capitalize(variant)}`}</Button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
