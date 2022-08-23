import { useRef } from "react";
import styles from "./style.module.scss";
import login_background from "../../assets/login_background.png";

const Login = () => {
    const account = useRef();
    const password = useRef();

   


    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginText}>Sign in</h2>
            <h3 className={styles.loginText}>Sign in and start managing your candidates!</h3>
            <input className={styles.loginContainer_input} type="text" ref={account} placeholder="Login" />
            <input className={styles.loginContainer_input} type="password" ref={password} placeholder="Password" />
            <div className={styles.loginContainer_tool}>
                <div className={styles.flex} >
                    <input type="checkbox" id="#" name="" value=""/>
                    <p className={`${styles.loginText} ${styles.toolText}`}>Remember Me</p>
                </div>
                <p className={`${styles.loginText} ${styles.toolText}`}>Forgot password?</p>
            </div>
            <button className={`${styles.loginText} ${styles.loginContainer_loginButton}`} onClick="" type="submit">Login</button>

        <img className={styles.loginContainer_image} src={login_background} alt="#" />
        </div>
    );
};

export default Login;