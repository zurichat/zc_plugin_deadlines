export default (searchText) => (dispatch) => {
	dispatch({
		type: SEARCH_REMINDERS,
		payload: searchText,
	})
}
