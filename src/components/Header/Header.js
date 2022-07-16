import styles from "./Header.module.scss";

export default function Header() {
    return (
        <div id="header" className={styles.root}>
            <div className="container">
                <div className={styles.title}>
                    <p>Hello I'm</p>
                    <h2>Tran Kha</h2>
                    <span>intern software engineer</span>
                </div>
                <div className={styles.img}>
                    <img
                        src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.15752-9/291807268_1218220452267085_548658609711458497_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5JGNzOOFb-cAX_4M87C&_nc_ht=scontent.fsgn5-12.fna&oh=03_AVIUZfpRsSOsrCp3VrKlYe6YztrzfSs8YvB7cKWQdEyY2A&oe=62F83CBC"
                        alt="My Face"
                    />
                </div>
            </div>
        </div>
    );
}
