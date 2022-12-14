import React, { useState } from 'react';
import axios from 'axios';

import ConfirmButton from '../../../Buttons/ConfirmButton';
import CancelButton from '../../../Buttons/CancelButton';
const AccessTrainer = ({AvailableTrainers, setAvailableTrainers}) => {
    /**
     * Need API to get Trainer names, styles, and personal information
     */
    /**
     * Replace following object with information from the backend
     */
    // const [AvailableTrainers, setAvailableTrainers] = useState([]
    //     [{
    //     id: '1',
    //     FirstName: 'John',
    //     LastName: 'Doe',
    //     Style: 'Western',
    //     Email: 'johnDoe@gmail.com',
    //     Address: '1234 Address',
    //     Experience: '1',
    //     isAdmin: false,
    // },
    // {
    //     id: '2',
    //     FirstName: 'Jane',
    //     LastName: 'Doe',
    //     Style: 'English',
    //     Email: 'janeDoe@gmail.com',
    //     Address: '1234 Address',
    //     Experience: '2',
    //     isAdmin: true,
    // },
    // {
    //     id: '3',
    //     FirstName: 'James',
    //     LastName: 'Doe',
    //     Email: 'jamesDoe@gmail.com',
    //     Address: '1234 Address',
    //     Style: 'Show',
    //     Experience: '3',
    //     isPreffered: false,
    //     isAdmin: false,
    //     isTrainer: true,
    //         },]
    // );
    // const [isMounted, setIsMounted] = useState(false);

    // if (!isMounted) {
        
    //     axios.get('/Admin/Trainer').then(resp => {
    //         let trainers = [];
    //         for (var i = 0; i < resp.data.length; i++) {
    //             try {
    //                  let name_array = resp.data.customer_name.split(" ");
    //             } catch {
    //                  let name_array = [
    //                      resp.data.customer_name,
    //                      ""
    //                  ]
    //              }
    //             trainers.push({
    //                 id: resp.data[i].TID,
    //                 FirstName: name_array[0],
    //                 LastName: name_array[1],
    //                 Style: resp.data[i].trainer_riding_style,
    //                 Email: resp.data[i].trainer_email_address,
    //                 Address: resp.data[i].trainer_address,
    //                 isAdmin: resp.data[i].trainer_administrator
    //             })
    //         }
    //         console.log(trainers);
    //         setAvailableTrainers(trainers);

    //     })
    //     setIsMounted(true);
    // }
    const [trainerInfoUpdateMessage, setTrainerInfoUpdateMessage] = useState('');
    const [showEditTrainer, setShowEditTrainer] = useState(false);

    const handleSetPrefferedTrainer = ({ data }) => {
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.id === data.id) {
                return {
                    ...object,
                    isPreffered: true,
                }
            }
            else return {
                ...object,
                isPreffered: false,
            };
        }))
    }
    const handleEditTrainer = ({ data }) => {
        /**
         * Send Information to Database
         */
        for (let i = 0; i < AvailableTrainers.length; i++) {
            if (AvailableTrainers[i].isPreffered) {
                // console.log('Our Trainer Here:', AvailableTrainers[i]);
                axios.post('/Admin/Trainer/Set_Values', {
                    "user_id": AvailableTrainers[i].id,
                    "user_name": AvailableTrainers[i].FirstName + " " + AvailableTrainers[i].LastName,
                    "user_address": AvailableTrainers[i].Address,
                    "user_riding_style": AvailableTrainers[i].Style,
                    "user_email_address": AvailableTrainers[i].Email,
                    "user_admin": AvailableTrainers[i].isAdmin ? 1 : 0
                })
            }
        }


        // console.log('Is this is my updated trainer info',updatedTrainerInfo);
        setTrainerInfoUpdateMessage('Trainer Information has been updated!');
    };

    const handleSetIsTrainer = ({data}) => {
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.id === data.id) {
                return {
                    ...object,
                    isTrainer: !data.isTrainer,
                }
            }
            else return {
                ...object,
            };
        }))
    }

    const handleSetIsAdmin = ({data}) => {
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.id === data.id) {
                return {
                    ...object,
                    isAdmin: !data.isAdmin,
                }
            }
            else return {
                ...object,
            };
        }))
    }

    const handleFirstNameInputChange = (event) => {
        event.persist();
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.isPreffered) {
                return {
                    ...object,
                    FirstName: event.target.value,
                }
            }
            else return {
                ...object,
        };
        }))
    }
    const handleLastNameInputChange = (event) => {
        event.persist();
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.isPreffered) {
                return {
                    ...object,
                    LastName: event.target.value,
                }
            }
            else return {
                ...object,
        };
        }))
    }

    const handleEmailInputChange = (event) => {
        event.persist();
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.isPreffered) {
                return {
                    ...object,
                    Email: event.target.value,
                }
            }
            else return {
                ...object,
        };
        }))
    }

    const handleAddressInputChange = (event) => {
        event.persist();
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.isPreffered) {
                return {
                    ...object,
                    Address: event.target.value,
                }
            }
            else return {
                ...object,
        };
        }))
    }

    const handleTrainerStyleChange = (event) => {
        event.persist();
        setAvailableTrainers([...AvailableTrainers].map(object => {
            // Need a Trainer ID for these
            if (object.isPreffered) {
                return {
                    ...object,
                    Style: event.target.value,
                }
            }
            else return {
                ...object,
        };
        }))
    }

    const trainersList =
        AvailableTrainers.map((data) => (
            data.isPreffered === true ?
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',                   
                    alignContent: 'center',
                    textAlign: 'center',
                    marginLeft: '40px',
                    marginRight: '40px',
                }}>
                    <span style={{ backgroundColor: '#727070' }}>{`${data.FirstName} ${data.LastName}` }</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Experience}</span>
                </div>
                :
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignContent: 'center',
                    textAlign: 'center', 
                    borderBottom: '1px solid black', 
                    marginLeft: '40px',
                    marginRight: '40px',
                }}
                    onClick={() => handleSetPrefferedTrainer({ data })}>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{`${data.FirstName} ${data.LastName}` }</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Experience}</span>
                </div>

        ))
    
    const editChosenTrainer =
        AvailableTrainers.map((data) => (
            data.isPreffered === true &&
            <div>
                <div className='inputTitles1'>
                    <label className='label'>First Name:</label>
                </div>
                <div className='inputBoxes1'>
                    <input className='input2'
                        type="text"
                        onChange={handleFirstNameInputChange}
                            value={data.FirstName}
                    />
                </div>
                <br/><br />  
                
                <div div className='inputTitles2'>
                    <label className='label'>Last Name:</label>
                </div>
                <div className='inputBoxes2'>
                <input className='input2'
                    type="text"
                    onChange={handleLastNameInputChange}
                    value={data.LastName}
                    />
                </div>
                <br /><br />
                
                <div className='inputTitles3'>
                    <label className='label'>Email Address:</label>
                </div>
                <div className='inputBoxes3'>
                <input className='input2'
                    type="text"
                    onChange={handleEmailInputChange}
                    value={data.Email}

                    />
                </div>
                <br/><br />
                
                <div className='inputTitles4'>
                    <label className='label'>Trainer Style:</label>
                </div>
                <div className='inputBoxes4'>
                    <input className='input2'
                        type="text"
                        onChange={handleTrainerStyleChange}
                        value={data.Style} 
                        // Need to create a data.Style for the line above in AddTrainer and AccessTrainer.
                        // Also need to add a boolean circle, similar to manage texts, but for the Admin permissions below 
                         
                    />
                </div>
                <br/><br/>
                
                <div className='inputTitles5'>
                <label className='label'>Address:</label>
                </div>
                <div className='inputBoxes5'>
                    <textarea rows={4} maxLength="75"
                        className='inputAddress'
                        type="text"
                        onChange={handleAddressInputChange}
                        value={data.Address}   
                    />
                </div>
                <br /><br />

                <div className='inputTitlesTrainers'>
                    <div className='label'
                        onClick={() => handleSetIsAdmin({ data })}
                    >
                        Admin: {data.isAdmin ? 'True' : 'False'}
                    </div>
                </div>
                <br /><br />
                    {/* <div

                        onClick={() => handleSetIsTrainer({data})}
                    >
                        Trainer: {data.isTrainer ? 'True' : 'False'}
                    </div>
                    {data.isTrainer && <div
                        onClick={() => handleSetIsAdmin({ data })}
                    >
                        Admin: {data.isAdmin ? 'True' : 'False'}

                    </div> } */}

            </div>
        ))
            
    const PreferredTrainerFormHeading = (
        <div style={{display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            marginLeft: '40px',
            marginRight: '40px', 
            
        }}>
            <div>Trainer</div>
            <div>Style</div>
            <div>Experience</div>
        </div>
    )  

    return (
        <div>
            {!showEditTrainer ?
                PreferredTrainerFormHeading && trainersList
                : editChosenTrainer}
            <div style={{color: 'green'}}>{trainerInfoUpdateMessage}</div>
            <div className='buttonContainer3'>
                <br /><br />
                <div className='button1'>
                    <CancelButton onClick={() => setShowEditTrainer(false)}/>
                    <ConfirmButton buttonText={showEditTrainer ? 'Change' : 'Edit'} onClick={showEditTrainer ? handleEditTrainer : () => setShowEditTrainer(true)} />
                </div>
            </div>

        </div>
    );
}

export default AccessTrainer;