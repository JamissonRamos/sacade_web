import * as S from './styled'

//Components
import AllFields from "../../../../../components/all_fields";
import HelperText from "../../../../../components/helper/text";


const Information = ({register, errors, data}) => {
    console.log(errors)
    return (
        <S.Container>
        {
            data &&
            Object.entries(data).map(([sectionKey, sectionValue]) => (
                <S.WrapRowInputs key={sectionKey}>
                    {Object.entries(sectionValue).map(([fieldKey, field]) => (
                        <S.WrapInput key={fieldKey} >
                            <span> {fieldKey} </span>
                            <AllFields.Text
                                level='n'
                                label={field.label}
                                type='text' 
                                name={fieldKey}
                                register={register} 
                                placeholder={`Digite seu ${field.label.toLowerCase()}`}
                                // {...register(fieldKey)}
                                //Icon={Theme.Icons.MdPerson} 
                            />
                            {errors[fieldKey] && errors[fieldKey].message && (
                                <HelperText > { errors[fieldKey].message } </HelperText>
                            )}  
                        </S.WrapInput>
                    ))}
                </S.WrapRowInputs>
            ))
        }

        </S.Container>
    )
}

export default Information


/* 

            <S.WrapRowInputs>
                <S.WrapInput>
                    nome
                </S.WrapInput>
                <S.WrapInput>
                    Sobre nome
                </S.WrapInput>
            </S.WrapRowInputs>
    <label htmlFor="nome">
                <input 
                    type="text"
                    placeholder='digite seu nome'
                    value={data.name || ""}
                    onChange={(e) => updateFieldHandler("name", e.target.value)}
                />
            </label>


*/