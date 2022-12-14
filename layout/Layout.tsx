import { LayoutProps } from "./Layout.props";
import styles from './P.module.css';
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sitbar/Sidebar";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>
					{children}
				</div>
			</div>
			<Footer />
		</>
	);
};