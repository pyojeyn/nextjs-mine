import styles from './module1.module.css';


const Module1 = () => {
    return (
        <div className={styles.contain}>
            <h1>Module1</h1>
            <button className={styles.btn}>1버튼</button>
        </div>
    )
}

export default Module1;