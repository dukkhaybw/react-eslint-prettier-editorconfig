import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';

import './assets/css/reset.css';
import 'antd/dist/antd.css';

ReactDOM.render(
	<React.StrictMode>
		<ConfigProvider locale={zhCN}>
			<App />
		</ConfigProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
