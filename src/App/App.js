import kind from '@enact/core/kind';
import ThemeDecorator from 'enact-lune/ThemeDecorator';
import Panels from 'enact-lune/Panels';
import PropTypes from 'prop-types';
import Changeable from '@enact/ui/Changeable';

import MainPanel from '../views/MainPanel';
import TestPanel from '../views/TestPanel';

import './attachErrorHandler';

import css from './App.module.less';

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	propTypes: {
		index: PropTypes.number,
		onNavigate: PropTypes.func,
		onButton: PropTypes.func
	},

	handlers: {
		onButton: (ev, props) => {
			if (props.onNavigate) {
				props.onNavigate({
					index: 1
				});
			}
		}
	},

	render: ({onButton, onNavigate, ...props}) => (
		<Panels {...props} index={props.index} onBack={onNavigate}>
			<MainPanel onNavigate={onButton} />
			<TestPanel />
		</Panels>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	ThemeDecorator(AppBase));

export default App;
