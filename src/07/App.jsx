import styles from "./styles.module.css";

import Header from "./component/Header/Header";
import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";

export default function App() {
    return (
        <div>
            <Header />
            <div className={styles.cards}>
                <Card />
                <Card />
            </div>

            <Footer />
        </div>
    )
}