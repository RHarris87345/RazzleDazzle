import React, { useState } from 'react';
import axios from 'axios';

import CancelButton from '../Buttons/CancelButton';
import ConfirmButton from '../Buttons/ConfirmButton';
import './styles.css'

const SignUp = ({setSignedIn, setwpage, setUserInfo, setUserPermissions}) => {
    /**
     * Reference for Forms logic
     * https://www.freecodecamp.org/news/beginner-react-project-build-basic-forms-using-react-hooks/
     * */
    const [signUpError, setSignUpError ] = useState(false);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });
    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
        console.log('firstName', values.firstName);
    };

    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
        console.log('lastName', values.lastName);
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
        console.log('email', values.email);
    };

    const handlePhoneNumberInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            phone: event.target.value,
        }));
        console.log('phone', values.phone);
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
        console.log('password', values.password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.password && values.email &&
            values.phone && values.password && values.firstName && values.lastName) {
            
            

            // Send Information to backend here
            const post = {
                "customer_name": values.firstName + " " + values.lastName,
                "customer_phone_number": values.phone,
                "customer_email_address": values.email,
                "customer_password": values.password,
            }
            axios.post('/Create_Account', post).then(resp => {
                const new_user = {
                    type: '/Customer',
                    id: resp.data,
                    FirstName: values.firstName,
                    LastName: values.lastName,
                    Style: '',
                    Email: values.email,
                    Address: '',
                    phone: values.phone
                };
                setUserInfo(new_user);
                setUserPermissions({
                    isAdmin: false,
                    isTrainer: false,
                    isCustomer: true,
                })
                setSignedIn(true);
                setwpage('Calendar')
            })
            
            // Remove the below comment later
            // console.log('Successful Sign Up!')
        } else {
            setSignUpError(true);
        }
    };
    const handleCancel = (event) => {
        event.preventDefault();

        setwpage('About Us')
        // Remove the below comment later
        console.log('Canceling Sign up!')
    }
    const error = (
        <div style={{color: 'red'}}>*</div>
    );
    return (
        <div className='backGround'>
            <form className='form'>
                <div className='inputTitles1SUp'>
                    <div className='asterictCenter'>{!values.firstName && error} <div className='fixList'>First Name:</div></div>    
                </div>
                <div className='inputBoxes1'>
                    <input
                    className='input2'
                    type="text"
                    onChange={handleFirstNameInputChange}
                    />
                </div>
                <br /><br />


                <div className='inputTitles2SUp'>
                    <div className='asterictCenter'>{!values.lastName && error} <div className='fixList'>Last Name:</div></div>
                </div>
                <div className='inputBoxes2'>
                    <input
                    type="text"
                    onChange={handleLastNameInputChange}
                    className='input2'  
                    />
                </div>
                <br /><br />


                <div className='inputTitles3SUp'>
                    <div className='asterictCenter'>{!values.email && error} <div className='fixList'>Email Address:</div></div>
                </div>
                <div className='inputBoxes3'>
                    <input
                    type="text"
                    onChange={handleEmailInputChange}
                    className='input2'
                    />
                </div>
                <br /><br />
            
                <div className='inputTitles4SUp'>
                <div className='asterictCenter'>{!values.phone && error} <div className='fixList'>Phone Number:</div></div>
                </div>
                <div className='inputBoxes4'>
                    <input
                    type="text"
                    onChange={handlePhoneNumberInputChange}
                    className='input2'
                    />
                </div>
                <br/><br />
             
                <div className='inputTitles5SUp'>
                <div className='asterictCenter'>{!values.password && error} <div className='fixList'>Password:</div></div>
                </div>
                <dir className='inputBoxes5'>
                    <input
                    type="text"
                    onChange={handlePasswordInputChange}
                    className='input2'
                    />
                </dir>
                <br/><br />

            {signUpError &&
                <div style={{fontWeight: 'bold'}}>
                    Please fill in all fields with a {error}
                </div>
            }
            <div className='buttonSignUpContainer'>
                <br /><br />
                <div className='button1'>
                    <ConfirmButton buttonText='Sign Up' type="button" value="Sign Up" onClick={handleSubmit}/>
                    <CancelButton type="button" value="Cancel" onClick={handleCancel} />
                </div>
            </div>
            
            
            <span className='span hyperlink' onClick={() => setwpage('Log In')}>Log In</span>
            <span className='span2 hyperlink' onClick={() => setwpage('Forgot Password')}>Forgot Password</span>
        </form>
        </div>
    );
}

export default SignUp;