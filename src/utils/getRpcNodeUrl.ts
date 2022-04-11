import sample from 'lodash/sample';
import { rpcNodes } from './rpcNodes';

export function getRpcNodeUrl(): string {
	return sample(rpcNodes) as string;
}
