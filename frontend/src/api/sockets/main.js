import { useEffect } from 'react'
import { useQueryClient } from 'react-query'

export const useSocketSubscription = () => {
	// Update this to use correct backend socket location
	const socket = new WebSocket('/socket')

	const queryClient = useQueryClient()

	useEffect(() => {
		socket.onopen = () => {
			console.log('Socket connected')
		}

		socket.onmessage = (message) => {
			// You can also destructure the data property from the socket message to trigger side effects like notifications
			const { queryKey } = JSON.parse(message)

			// Invalidate query to trigger refetch and rerender
			queryClient.invalidateQueries(queryKey)
		}

		return () => socket.close()
	}, [queryClient])
}
