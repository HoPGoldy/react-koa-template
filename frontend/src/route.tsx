import { FC, lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

export const Routes: FC = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: (
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
            )
        },
        {
            path: '/about',
            element: (
                <Suspense fallback={<Loading />}>
                    <About />
                </Suspense>
            )
        },
    ])

    return routes
}