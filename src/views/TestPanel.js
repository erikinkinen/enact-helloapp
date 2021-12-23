import kind from '@enact/core/kind';
import {Panel, Header} from 'enact-lune/Panels';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header noCloseButton="true" noBackButton="true" title="TestPanel!" />
		</Panel>
	)
});

export default MainPanel;
