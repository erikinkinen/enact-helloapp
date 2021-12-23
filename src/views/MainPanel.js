import Button from 'enact-lune/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from 'enact-lune/Panels';
import PropTypes from 'prop-types';

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		onNavigate: PropTypes.func
	},

	handlers: {
		onNavigate: (ev, {onNavigate}) => {
			if (onNavigate) {
				onNavigate({index: 1})
			}
		}
	},

	render: ({onNavigate, ...props}) => (
		<Panel {...props}>
			<Header noCloseButton="true" title="Hello world!" />
			<Button onClick={onNavigate}>Click me</Button>
		</Panel>
	)
});

export default MainPanel;
