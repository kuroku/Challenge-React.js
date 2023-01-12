import AuthProvider from './provider/AuthProvider'
import PageLayout from './pages/PageLayout/PageLayout'
import './styles.css'

export function App() {
	return (
		<AuthProvider>
			<PageLayout/>
		</AuthProvider>
	)
}
