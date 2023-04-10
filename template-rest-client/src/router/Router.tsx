import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { gameLoader } from '~common/configs';
import { ErrorHandler, Game, NotFound, RouterFallback } from '~presentation/screens';

const router = createBrowserRouter([
	{
		path: '/',
		index: true,
		loader: gameLoader,
		element: <Game />,
		errorElement: <ErrorHandler />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export function Router() {
	return <RouterProvider router={router} fallbackElement={<RouterFallback />} />;
}
