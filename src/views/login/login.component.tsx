import React from 'react';
import {Link} from 'react-router-dom';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import stylesContainer from '../../shared/styles/container.styles.module.css';
import stylesButtonsBlock from '../../shared/styles/buttons-container.styles.module.css';
import stylesFormFieldsBlock from '../../shared/styles/form-fields-block.styles.module.css';
import {Button, Input} from "../../shared/ui";
import {Path} from "../../shared/route";

export type LoginDataType = {
    email: string;
    password: string;
    checkPassword: string;
}

type LoginPropsType = {
    onSubmit: SubmitHandler<FieldValues>
}

const Login: React.FC<LoginPropsType> = ({onSubmit}) => {

    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm();

    return (
        <form
            className={stylesContainer.container}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Sign In</h2>
            <div className={stylesFormFieldsBlock.inputBlock}>
                <Input
                    {...register("email", {required: "This field is required."})}
                    placeholder="email"
                />
                {errors?.email?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.email?.message}</span>}
                <Input
                    {...register("password", {
                        required: "This field is required.",
                        minLength: {
                            value: 4,
                            message: "Password must have at least 4 characters"
                        }
                    })}
                    placeholder="password"
                    type="password"
                />
                {errors?.password?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.password?.message}</span>}
            </div>
            <div className={stylesButtonsBlock.buttonBlock}>
                <Button type="submit" disabled={isSubmitting}>
                    Sign in
                </Button>
                <div className={stylesButtonsBlock.signIn}>
                    <div>Don't have an account?</div>
                    <div>
                        <Link to={Path.signUp} className={stylesButtonsBlock.link}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default React.memo(Login);