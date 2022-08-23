import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

import login_background from "../../assets/login_background.png";

const cx = classNames.bind(styles);

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    /* eslint-disable no-debugger, no-console */
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className={cx("login")} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx("text")}>Sign in</h2>
                <h3 className={cx("text")}>Sign in and start managing your candidates!</h3>
                <div className={cx("login__input")}>
                    <input type="text" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span>Please enter email !</span>}
                </div>
                <div className={cx("login__input")}>
                    <input type="password" placeholder="Password" {...register("password", { required: true })} />
                    {errors.password && <span>Please enter password !</span>}
                </div>
                <div className={cx("login__tool")}>
                    <div className={cx("flex")}>
                        <input type="checkbox" id="#" name="" value="" />
                        <p className={cx("text", "toolText")}>Remember Me</p>
                    </div>
                    <p className={cx("text", "toolText")}>Forgot password?</p>
                </div>
                <input className={cx("text", "login__button")} type="submit" />
            </form>
            <img className={cx("login__image")} src={login_background} alt="#" />
        </div>
    );
};

export default Login;