import {
	EggCardBaseComp,
	EggCardBaseContainer,
	EggCardInfoContainer,
	EggCardShapeContainer,
	EggTagContainer,
} from './styles';
import { EggCardBaseProps } from './types';
import clsx from 'clsx';

function getEggTagRenderer(props: EggCardBaseProps): JSX.Element | null {
	if (props.eggTag == null) return null;
	return (
		<EggTagContainer {...props.eggTagProps}>{props.eggTag}</EggTagContainer>
	);
}
function EggCardBase(props: EggCardBaseProps): JSX.Element {
	const { active, onClick: onClickProps } = props;

	const onClickEggCard = () => {
		if (onClickProps) {
			onClickProps(props.eggData);
		}
	};

	const containerClassName = clsx(active && 'active');

	return (
		<EggCardBaseContainer {...props} onClick={onClickEggCard}>
			<EggCardBaseComp className={containerClassName}>
				{getEggTagRenderer(props)}
				<EggCardShapeContainer {...props.eggShapeProps}>
					{props.eggShape}
				</EggCardShapeContainer>
				<EggCardInfoContainer {...props.eggInfoProps}>
					{props.eggInfo}
				</EggCardInfoContainer>
			</EggCardBaseComp>
		</EggCardBaseContainer>
	);
}

EggCardBase.defaultProps = {
	active: false,
};

export default EggCardBase;
