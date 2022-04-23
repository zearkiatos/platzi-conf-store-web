import { useState, useEffect } from 'react';
import formSchema from './formValidation';

const useInformationForm = (form) => {
    console.log(formSchema.validate(form));
    const [isValid, setIsValid] = useState(false);
    // console.log(formSchema(form));
    // useEffect(() => {
    //     console.log(formSchema(form));
    //     // setIsValid();
    // },[]);


    return {
        isValid
    };
};

export default useInformationForm;