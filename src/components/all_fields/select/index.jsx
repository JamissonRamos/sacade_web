    import React, { useEffect, useId, useState } from 'react'

    import Label from '../elements/label'
    import WrapperFieldInput from '../../Wrapper/Inputs';
    import { LeadingIcon } from '../elements/leading_icon';
    import Select from '../elements/select';
    import { mask, unMask } from 'remask';
    import useMasksCustom from '../../../hooks/masks';


    const SelectCustom = ({register, level, label, name, Icon, maskInput, setValue, options, defaultValue }) => {
        const [ isFocused, setIsFocused] = useState(false);
        const [leadingIcon ] = useState(!!Icon);
        const [selectedValue, setSelectedValue] = useState(defaultValue || "");
        // const [showPassword, setShowPassword] = useState(false);
        const inputId = useId();
        // Pegue as propriedades do register, incluindo onChange original
        const { onChange: onChangeRegister, ...registerProps } = register(name);

        const handleFocus = () => {
            setIsFocused(true)
        };
        
        const handleBlur = (event) => {
            const value = event.target.value;
            setIsFocused(value.trim() !== '');
            // Se o campo estiver vazio, define o valor como null
            if (value.trim() === '') {
                setValue(name, null);
            }
        };
        
        const handleChange = (event) => {
            const value = event.target.value;
            // const value = unMask(event.target.value);
            // console.log(value)
            // console.log(setValue)
            // if (maskInput) {
            //     const typeMask = useMasksCustom[maskInput];
            //     const maskedValue = mask(value, typeMask); // Adapte a máscara conforme necessário
            //     setValue(name, maskedValue);
            //     onChangeRegister({
            //         target: {
            //             name,
            //             value: maskedValue
            //         }
            //     });
            // } else {
                setSelectedValue(value);
                console.log(selectedValue)
                setValue(name, value);
                // Chame o onChange original do register
                onChangeRegister({
                    target: {
                        name,
                        value
                    }
                });
            //}
        };
        useEffect(() => {
            if (defaultValue) {
                setSelectedValue(defaultValue);
                setValue(name, defaultValue);
                setIsFocused(true);
            }
        }, [defaultValue, setValue, name]);
        
        return (

            <WrapperFieldInput>
                <Label 
                    $level={level}  
                    $isFocused={isFocused} 
                    $leadingIcon={leadingIcon} 
                    htmlFor={inputId} > {label} 
                </Label>

                <Select
                    id={inputId} 
                    $level={level}
                    name={name}
                    $isFocused={isFocused}
                    $leadingIcon={leadingIcon}
                    value={selectedValue} // Defina o valor padrão aqui
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    {...registerProps} // Inclua as outras propriedades do register 
                >  

                    {isFocused && (
                        <>
                            <option value="" disabled>
                                Selecione uma opção
                            </option>
                            {options && options.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </>
                    )}
                </Select> 

                {
                    Icon && (
                        <LeadingIcon $level={level} $isFocused={isFocused}>
                            <Icon />
                        </LeadingIcon>
                    )
                }

            </WrapperFieldInput>
        )
    }

    export default SelectCustom
