import React from 'react';
import { connect } from 'react-redux';

import s from './Youtube.module.css';

const Youtube = () => {
	return (
		<svg width="100" height="100" viewBox="0 0 32 32" className={s.svgLightTheme}>
			<path d="M10.75 5.294c0.007-0.027 0.011-0.046 0.012-0.056l0.033-0.236-1.48-0.008c-1.337-0.008-1.746 0-1.783 0.034-0.018 0.016-0.479 1.77-1.302 4.946-0.392 1.515-0.723 2.725-0.734 2.689s-0.481-1.766-1.044-3.843c-0.563-2.078-1.034-3.789-1.048-3.803-0.019-0.019-1.812-0.028-3.263-0.016-0.21 0.002-0.327-0.41 1.876 6.598 0.305 0.97 0.762 2.344 1.015 3.052 0.292 0.817 0.5 1.448 0.642 1.974 0.251 1.002 0.26 1.63 0.205 2.363-0.063 0.847-0.073 6.826-0.011 6.926 0.047 0.077 2.851 0.112 3.116 0.040 0.042-0.012 0.071-0.053 0.090-0.279 0.066-0.194 0.071-0.968 0.071-4.18v-4.103l0.179-0.566c0.117-0.37 0.413-1.344 0.656-2.163s0.538-1.801 0.654-2.18c1.057-3.447 2.067-6.838 2.094-7.032l0.022-0.158z"></path>
			<path d="M26.441 10.27l-0.001 0.214-0.033 0-0.019 5.906-0.018 5.726-0.458 0.467c-0.513 0.522-0.925 0.722-1.297 0.629-0.405-0.102-0.395 0.056-0.429-6.712l-0.031-6.23h-2.947v0.214h-0.034v6.759c0 7.242-0 7.237 0.367 7.965 0.293 0.579 0.719 0.861 1.45 0.958h0c0.962 0.128 2-0.308 2.962-1.244l0.418-0.407v0.701c0 0.606 0.017 0.706 0.127 0.737 0.18 0.050 2.412 0.053 2.653 0.004l0.2-0.041v-0.207l0.034-0.007v-15.472l-2.944 0.039z"></path>
			<path d="M18.965 13.323c-0.279-1.198-0.802-2.004-1.664-2.561-1.353-0.875-2.897-0.967-4.331-0.259-1.045 0.516-1.717 1.372-2.065 2.628-0.041 0.15-0.072 0.275-0.095 0.463-0.088 0.443-0.099 1.105-0.122 4.186-0.035 4.748 0.019 5.313 0.614 6.391 0.583 1.058 1.794 1.833 3.112 1.993 0.397 0.048 1.201-0.027 1.663-0.155 1.051-0.291 2.058-1.122 2.504-2.065 0.192-0.407 0.309-0.691 0.379-1.208 0.13-0.707 0.14-1.849 0.14-4.762-0-3.715-0.012-4.121-0.136-4.651zM15.604 23c-0.247 0.188-0.679 0.27-1.031 0.195-0.271-0.058-0.636-0.482-0.748-0.869-0.14-0.482-0.151-7.187-0.030-8.502 0.199-0.658 0.756-1.002 1.364-0.838 0.474 0.128 0.716 0.424 0.854 1.046 0.103 0.461 0.115 1.035 0.093 4.414-0.014 2.241-0.022 3.336-0.096 3.924-0.074 0.371-0.197 0.47-0.407 0.63z"></path>
			<path d="M71.887 16.692h1.424l-0.023-1.29c-0.022-1.183-0.039-1.319-0.198-1.64-0.249-0.507-0.617-0.731-1.201-0.731-0.701 0-1.146 0.339-1.356 1.036-0.089 0.296-0.183 2.334-0.116 2.51 0.038 0.098 0.241 0.116 1.469 0.116z"></path>
			<path d="M62.369 13.757c-0.19-0.383-0.543-0.571-0.954-0.556-0.319 0.011-0.674 0.146-1.015 0.407l-0.254 0.193v9.269l0.254 0.193c0.576 0.439 1.209 0.532 1.644 0.241 0.172-0.115 0.285-0.274 0.372-0.527 0.114-0.329 0.124-0.75 0.109-4.649-0.015-4.064-0.024-4.303-0.157-4.57z"></path>
			<path d="M80.027 9.582c-0.284-3.401-0.509-4.505-1.211-5.923-0.929-1.878-2.272-2.868-4.184-3.086-1.478-0.168-7.041-0.405-12.189-0.52-8.912-0.198-23.564 0.183-25.436 0.662-0.865 0.221-1.513 0.597-2.188 1.269-1.183 1.177-1.887 2.865-2.17 5.2-0.647 5.331-0.66 11.773-0.037 17.297 0.268 2.376 0.82 3.92 1.857 5.192 0.647 0.794 1.761 1.469 2.758 1.67 0.7 0.141 4.201 0.337 9.3 0.521 0.76 0.027 2.771 0.074 4.47 0.105 3.541 0.063 10.051 0.026 13.772-0.079 2.504-0.070 7.069-0.255 7.922-0.321 0.24-0.019 0.796-0.054 1.236-0.079 1.477-0.083 2.417-0.393 3.3-1.086 1.142-0.897 2.027-2.556 2.4-4.501 0.354-1.84 0.59-5.118 0.638-8.839 0.040-3.109-0.013-4.787-0.238-7.482zM44.54 8.35l-1.656 0.020-0.073 17.661-1.435 0.018c-1.11 0.015-1.447-0.001-1.474-0.073-0.019-0.051-0.042-4.032-0.052-8.849l-0.018-8.758-3.234-0.041v-2.76l9.557 0.039 0.041 2.721-1.656 0.020zM54.694 18.472v7.595h-2.616v-0.799c0-0.601-0.023-0.799-0.093-0.799-0.051 0-0.288 0.198-0.527 0.441-0.517 0.526-1.13 0.949-1.653 1.145-1.083 0.405-2.112 0.169-2.551-0.586-0.401-0.691-0.409-0.845-0.409-8.010v-6.58h2.614l0.020 6.196c0.019 6.088 0.022 6.2 0.168 6.448 0.193 0.329 0.488 0.417 0.956 0.288 0.276-0.076 0.464-0.21 0.911-0.654l0.563-0.561v-11.717h2.616v7.595zM64.899 24.982c-0.23 0.513-0.744 1.016-1.165 1.14-1.099 0.324-1.98 0.060-2.998-0.897-0.316-0.297-0.61-0.538-0.654-0.538-0.053 0-0.082 0.233-0.082 0.69v0.69h-2.616v-20.495h2.616v3.343c0 1.839 0.025 3.343 0.054 3.343s0.306-0.244 0.613-0.541c0.707-0.683 1.298-0.981 2.049-1.038 1.338-0.101 2.135 0.587 2.501 2.16 0.114 0.491 0.125 1.051 0.125 5.596-0 5.537-0.001 5.56-0.443 6.546zM75.968 21.943c-0.023 0.57-0.092 1.223-0.154 1.454-0.364 1.349-1.332 2.304-2.732 2.696-1.885 0.527-3.96-0.337-4.788-1.994-0.465-0.93-0.481-1.116-0.481-5.662 0-3.707 0.013-4.162 0.132-4.667 0.336-1.431 1.168-2.357 2.578-2.871 0.408-0.149 0.835-0.225 1.261-0.234 1.521-0.031 3.031 0.787 3.663 2.119 0.427 0.899 0.48 1.283 0.522 3.816l0.039 2.271-5.578 0.039-0.020 1.526c-0.029 2.153 0.116 2.815 0.697 3.207 0.489 0.329 1.24 0.305 1.649-0.055 0.383-0.337 0.491-0.698 0.529-1.753l0.034-0.927h2.694l-0.043 1.036z"></path>
		</svg>
	);
};

export default Youtube;
