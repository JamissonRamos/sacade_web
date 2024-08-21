    import React, { useEffect, useId, useState } from 'react'

    import Label from '../elements/label'
    import WrapperFieldInput from '../../Wrapper/Inputs';
    import Input from '../elements/input';
    import { LeadingIcon } from '../elements/leading_icon';
    import { SecondaryIcon } from '../elements/secondary_icon';
    import { Theme } from '../../../theme';
    import { mask, unMask } from 'remask';
    import useMasksCustom from '../../../hooks/masks';


    const Text = ({
        register, 
        level, 
        label, 
        type, 
        name, 
        placeholder, 
        Icon, 
        maskInput, 
        setValue, defaultValue}) => {
        const [ isFocused, setIsFocused] = useState(false);
        const [ leadingIcon ] = useState(!!Icon);
        const [ showPassword, setShowPassword ] = useState(false);
        const inputId = useId();

        // Pegue as propriedades do register, incluindo onChange original
        const { onChange: onChangeRegister, ...registerProps } = register(name);

        const handleFocus = () => {
            setIsFocused(true)
        };
        
        const handleBlur = (event) => {

            const value = event.target.value || '';

            // Verifique se o campo está vazio
            if (value.trim() === '') {
                // Se o campo for vazio, defina como null apenas se o campo for explicitamente obrigatório
                setValue(name, null); // Aqui consideramos que é opcional
            } else {
                setValue(name, value.trim());
            }
    
            setIsFocused(value !== '');

             // Chame o onBlur original do registerProps
            if (registerProps.onBlur) {
                registerProps.onBlur(event);
            }

        };

        const handleTogglePassword = () => {
            setShowPassword((prevState) => !prevState);
        } 
        
        const handleChange = (event) => {
            const value = unMask(event.target.value);
            if (maskInput) {
                const typeMask = useMasksCustom[maskInput];
                const maskedValue = mask(value, typeMask); // Adapte a máscara conforme necessário
                setValue(name, maskedValue);

                // Chame o onChange original do register
                onChangeRegister({
                    target: {
                        name,
                        value: value
                    }
                });
                
            } else {
                // Chame o onChange original do register
                onChangeRegister({
                    target: {
                        name,
                        value
                    }
                });
            }
        };

        useEffect(() => {
            if (defaultValue) {
                setValue(name, defaultValue);
                setIsFocused(true);
            }
        }, [defaultValue, setValue, name]);
        
        return (

            <WrapperFieldInput>
                <Label 
                    $level={level}  
                    $isFocused={isFocused || !!defaultValue} 
                    $leadingIcon={leadingIcon} 
                    htmlFor={inputId} > {label} 
                </Label>

                <Input
                    id={inputId} 
                    $level={level}
                    type={showPassword ? 'text' : type}
                    name={name}
                    placeholder={isFocused ? placeholder : ''}
                    $isFocused={isFocused || !!defaultValue}
                    $leadingIcon={leadingIcon}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    {...registerProps} // Inclua as outras propriedades do register 
                    onBlur={handleBlur} // Mova para depois de registerProps
                /> 

                {
                    Icon && (
                        <LeadingIcon $level={level} $isFocused={isFocused || !!defaultValue}>
                            <Icon />
                        </LeadingIcon>
                    )
                }

                {
                    type === 'password' ? 
                    
                        <SecondaryIcon onClick={handleTogglePassword}> 
                            {showPassword ? (
                                <Theme.Icons.MdVisibility  size={20} color={isFocused ? Theme.colors.green800 : Theme.colors.grey600}/>
                            ) : (
                                <Theme.Icons.MdVisibilityOff size={20} color={isFocused ? Theme.colors.green800 : Theme.colors.grey600}/>
                            )}
                        </SecondaryIcon>: null
                }


            </WrapperFieldInput>
        )
    }

    export default Text