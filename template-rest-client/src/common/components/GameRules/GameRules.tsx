import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '../Dialog';
import { IconButton } from './gameRules.styles';
import { Tooltip } from 'react-tooltip';

export function GameRules() {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	const tooltip = t('general.rules');

	return (
		<>
			<IconButton data-tooltip-id='game-rules' onClick={() => setIsOpen(true)} />

			<Dialog isOpen={isOpen} title={t('general.rules')} onClose={() => setIsOpen(false)}>
				Here goes the rules for the game
			</Dialog>

			<Tooltip id='game-rules' place='right' content={tooltip} />
		</>
	);
}
