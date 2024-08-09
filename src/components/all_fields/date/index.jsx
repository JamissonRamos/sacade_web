import { useEffect, useId, useState } from 'react'
import { format, parseISO } from 'date-fns';
import Label from '../elements/label'
import WrapperFieldInput from '../../Wrapper/Inputs';
import InputDate from '../elements/input_date';

function formatDate (dateStr) {

    if (dateStr.includes('T')) {
        const date = parseISO(dateStr);
        return format(date, 'yyyy-MM-dd');
    }
    // Caso a string esteja no formato "yyyymmdd"
    if (dateStr.length === 8) {
        const date = new Date(
            `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`
        );
        return format(date, 'yyyy-MM-dd');
    }

    return dateStr;
}
const Date = ({register, level, label, name,  setValue, defaultValue}) => {
    const [ isFocused, setIsFocused] = useState(false);
    const inputId = useId();

    const handleFocus = () => {
        setIsFocused(true)
    };
    
    const handleBlur = (event) => {
        const value = event.target.value;
        setIsFocused(value.trim() !== '');
    };

    useEffect(() => {
        if (defaultValue) {
            const formattedDate = formatDate(defaultValue);
            //const dateValue = formatDate(defaultValue);
            setValue(name, formattedDate);
            setIsFocused(true);
            //coloca uma regra do campo vazio volta a label 
        }
    }, [defaultValue, setValue, name]);

    return (

        <WrapperFieldInput>
            <Label 
                $level={level}  
                $isFocused={isFocused} 
                htmlFor={inputId} > {label} 
            </Label>

            <InputDate
                id={inputId} 
                $level={level}
                type='date'
                name={name}
                placeholder={null}
                $isFocused={isFocused}
                {...register(name)} // Aqui estamos aplicando o register
                onBlur={handleBlur}
                onFocus={handleFocus}
            /> 

        </WrapperFieldInput>
    )
}

    export default Date


