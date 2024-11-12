const LocalStorageService = (() => {
	var _service

	const _getService = () => {
		if (!_service) {
			_service = this
			return _service
		}
		return _service
	}

	const _setTokenData = (tokenData) => {
		localStorage.setItem('access_token', tokenData.access_token)
		localStorage.setItem('refresh_token', tokenData.refresh_token)
	}

	const _setAuthData = (authData) => {
		localStorage.setItem('access_token', authData.access_token)
		localStorage.setItem('refresh_token', authData.refresh_token)
	}

	const _setUserData = (userData) => {
		localStorage.setItem('user_data', userData)
	}
	const _setCartData = (cartData) => {
		localStorage.setItem("cart_data", cartData);
	}
	const _setRedirectUrl = (url) => {
		localStorage.setItem('redirect_url', url);
	}

	const _getAccessToken = () => {
		return localStorage.getItem('access_token')
	}

	const _getRefreshToken = () => {
		return localStorage.getItem('refresh_token')
	}

	const _getUserData = () => {
		return JSON.parse(localStorage.getItem('user_data'))
	}

	const _getUserRole = () => {
		return localStorage.getItem('roleId')
	}

	const _getUserPermissions = () => {
		return JSON.parse(localStorage.getItem('permissions'))
	}
	const _getCartData = () => {
		return localStorage.getItem('cart_data')
	}


	const _clearAuthData = () => {
		localStorage.removeItem("refresh_token")
		localStorage.removeItem("user_data")
		localStorage.removeItem("access_token")
		localStorage.removeItem("loglevel")
	}

	const _setSessionId = (_sessionId) => {
		localStorage.setItem('sessionId', _sessionId)
	}

	const _getSessionId = () => {
		return localStorage.getItem('sessionId')
	}

	const _getRedirectUrl = () => {
		return localStorage.getItem('redirect_url');
	}
	const _removeRedirectUrl = () => {
		localStorage.removeItem('redirect_url');
	}


	const _setOrderData = (_orderData) => {
		localStorage.setItem('orderData', _orderData)
	}

	const _getOrderData = () => {
		return JSON.parse(localStorage.getItem('orderData'))
	}


	const _setDeviceDetails = (_deviceDetails) => {
		localStorage.setItem('deviceDetails', _deviceDetails)
	}

	const _getDeviceDetails = () => {
		return JSON.parse(localStorage.getItem('deviceDetails'))
	}

	const _setLanguageCode = (_languageCode) => {
		localStorage.setItem('languageCode', _languageCode)
	}

	const _getLanguageCode = () => {
		return localStorage.getItem('languageCode')
	}

	return {
		getService: _getService,
		setTokenData: _setTokenData,
		setAuthData: _setAuthData,
		setUserData: _setUserData,
		setRedirectUrl: _setRedirectUrl,
		getAccessToken: _getAccessToken,
		getUserData: _getUserData,
		getRefreshToken: _getRefreshToken,
		getUserRole: _getUserRole,
		getUserPermissions: _getUserPermissions,
		clearAuthData: _clearAuthData,
		setSessionId: _setSessionId,
		getSessionId: _getSessionId,
		getRedirectUrl: _getRedirectUrl,
		removeRedirectUrl: _removeRedirectUrl,
		setOrderData: _setOrderData,
		setCartData: _setCartData,
		getCartData: _getCartData,
		getOrderData: _getOrderData,
		setDeviceDetails: _setDeviceDetails,
		getDeviceDetails: _getDeviceDetails,
		setLanguageCode: _setLanguageCode,
		getLanguageCode: _getLanguageCode,
	}
})()

export default LocalStorageService