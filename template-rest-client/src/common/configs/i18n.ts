import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, es, pt } from '~common/locales';

i18n
	.use(initReactI18next)
	.use({
		type: '3rdParty',
		init(i18next: { changeLanguage: (arg0: string) => void }) {
			if (typeof navigator === 'undefined') return;

			i18next.changeLanguage(
				navigator.language ? navigator.language.substring(0, 2) : 'en'
			);
		}
	})
	.init({
		detection: { order: ['path', 'navigator'] },
		resources: {
			en: { translation: en },
			es: { translation: es },
			pt: { translation: pt }
		},
		debug: false,
		fallbackLng: 'en',
		interpolation: { escapeValue: false }
	});

export default i18n;
