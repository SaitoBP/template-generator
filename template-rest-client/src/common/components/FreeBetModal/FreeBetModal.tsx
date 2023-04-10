import { useState } from 'react';
import { useFreeBetStore } from '~common/utils';
import { FreeBetRegulation } from '../FreeBetRegulation';
import { FreeBetRewardList } from '../FreeBetRewardList';
import { FreeBetError } from '../FreeBetError';
import { FreeBetReward } from '../FreeBetReward';

export function FreeBetModal() {
	const [isRewardListOpen, setIsRewardListOpen] = useState(false);
	const [isRegulationOpen, setIsRegulationOpen] = useState(false);
	const freeBets = useFreeBetStore((state) => state.freeBet);

	function handleOpenRegulation() {
		setIsRewardListOpen(false);
		setIsRegulationOpen(true);
	}

	return (
		<>
			<FreeBetRewardList
				isOpen={isRewardListOpen}
				freeBets={freeBets}
				onOpenRegulation={handleOpenRegulation}
			/>

			<FreeBetRegulation
				isOpen={isRegulationOpen}
				onClose={() => setIsRegulationOpen(false)}
			/>

			<FreeBetError isOpen={false} onClose={() => console.log('close error')} />

			{freeBets.map((freeBet) => (
				<FreeBetReward key={freeBet._id} isOpen={false} freeBet={freeBet} />
			))}
		</>
	);
}
