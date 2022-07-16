import { Grid } from "@material-ui/core";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div id="header" className={styles.root}>
            <div className="container">
                <h2 className={styles.title}>Tran Kha</h2>
                <Grid container className={styles.menuContainer}>
                    {menus.map((item) => (
                        <Grid item key={item.id} className={styles.menuItem}>
                            <p>{item.content}</p>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

const menus = [
    {
        id: 1,
        content: "Home",
    },
    {
        id: 2,
        content: "About",
    },
    {
        id: 3,
        content: "Experience",
    },
    {
        id: 4,
        content: "Services",
    },
    {
        id: 5,
        content: "Portfolio",
    },
];
