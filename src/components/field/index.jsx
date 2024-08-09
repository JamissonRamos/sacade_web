// import { useId, useState } from "react";
import React, { useId, useState } from "react";
import { Theme } from "../../theme";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { LeftIconContainer } from "./icon/left";

import WrapperFieldInput from "../Wrapper/Inputs";
import Label from "./label/index";
import Input from "./input/index";
import RightIconContainer from "./password/icon";

const Text = ({label, type, name, register, setValue, Icon, placeholder }) => {
    const [ isFocused, setIsFocused] = useState(false);
    const inputId = useId();
    const [iconLeft ] = useState(Icon ? true : false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => setIsFocused(true);
    
    const handleBlur = (event) => {
        const value = event.target.value;
        setIsFocused(value.trim() !== '');
        console.log('sair');
    };
    const handleChange = (event) => {
        setValue(event.target.name, event.target.value, { shouldValidate: true });
        setIsFocused(true)
       
    }
    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    return(
        <WrapperFieldInput>
            <Label  className={isFocused ? 'is-focused' : ''} htmlFor={inputId} > {label} </Label>

            <Input
                id={inputId}
                type={showPassword ? 'text' : type} 
                name={name} 
                {...register(name)}
                placeholder={isFocused ? placeholder : ''} 
                $iconLeft={iconLeft} 
                className={isFocused ? 'is-focused' : ''}
                onFocus={handleFocus} 
                onBlur={handleBlur}  
                onChange={handleChange}
            />

            {
                type === 'password' ?  
                    <RightIconContainer onClick={handleTogglePassword}> 
                        {showPassword ? (
                            <MdVisibility  size={20} color={isFocused ? Theme.colors.green800 : Theme.colors.grey600}/>
                        ) : (
                            <MdVisibilityOff size={20} color={isFocused ? Theme.colors.green800 : Theme.colors.grey600}/>
                        )}
                    </RightIconContainer>: null
            }

            {Icon && (
                <LeftIconContainer >
                    <Icon size={20} color={isFocused ? Theme.colors.green800 : Theme.colors.grey600} />
                </LeftIconContainer>
            )}
        </WrapperFieldInput>
    )
}

const Field = {
    Text
}

export default Field