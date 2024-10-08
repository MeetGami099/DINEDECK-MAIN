import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import check from "/Svg/solar_bill-check-linear.svg"
import styles from './UserInfo.module.css'

const UserInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleNavbar = () => {
    setIsVisible(!isVisible);

  };
  const [firstn, setFirstn] = useState('Initial Value');
  const [lastn, setLastn] = useState('Initial Value');
  const [email, setEmail] = useState('InitialValue');
  const [phone, setPhone] = useState(9911991199);
  const [state, setState] = useState('Initial Value');
  const [city, setCity] = useState('Initial Value');
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };
  const handleChange = (e) => {
    setFirstn(e.target[1].value);
    setLastn(e.target[2].value);
    setEmail(e.target[3].value);
    setPhone(e.target[4].value);
    setState(e.target[5].value);
    setCity(e.target[6].value);
  };
  return (
    <div className={styles.contUserInfo}>
      <div className={styles.mainDiv9}>
        <div className={styles.Navbar}>
          <div className={styles.item1}>
            <div className={styles.sub1} onClick={toggleNavbar}>{isVisible ? <IoClose /> : <SlMenu />}</div>
            {
              isVisible ?
                <nav className={`${styles.NavbarToggle}`} id="navbar">
                  <ul className={`${styles.ulToggle} `}>
                    <li className={styles.liToggle}>
                      <div className={styles.liIconToggle}>
                        <img src={check} alt="svg" />
                      </div>
                      <div className={styles.liTextToggle}>Billings</div>
                    </li>
                    <Link to="/Manager" className={`${styles.liToggle} nav-link`}>
                      <div className={styles.liIconToggle}>
                        <img src={check} alt="svg" />
                      </div>
                      <div className={styles.liTextToggle}>Operations</div>
                    </Link>
                    <li className={styles.liToggle}>
                      <div className={styles.liIconToggle}>
                        <img src={check} alt="svg" />
                      </div>
                      <div className={styles.liTextToggle}>Reports</div>
                    </li>
                  </ul>
                </nav>
                : <></>
            }
            <div className={styles.sub2}>
              <img src="/Assets/logo.png" alt="" />
            </div>
          </div>
          <div className={styles.item2}>User Information</div>
        </div>
        <div className={styles.Settings}>
          <div className={styles.Line}></div>
          <div className={styles.Content}>

            <div className={styles.item1}>
              <div className={styles.sub1}>
                <img src="./Assets/user-profile-image.png" alt="" />
              </div>
              <div className={styles.sub2}>Meet Gami</div>
            </div>
            <form className={styles.item2}>
              <div className={`${styles.input1} ${styles.input}`}>
                <div className={styles.inputname}>First Name</div>
                {/* <input type="text" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={firstn} type="text" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{firstn}</div>
                )}
              </div>
              <div className={`${styles.input2} ${styles.input}`}>
                <div className={styles.inputname}>Last Name</div>
                {/* <input type="text" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={lastn} type="text" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{lastn}</div>
                )}
              </div>
              <div className={`${styles.input3} ${styles.input}`}>
                <div className={styles.inputname}>Email Address</div>
                {/* <input type="email" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={`${email}@gmail.com`} type="email" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{email}</div>
                )}
              </div>
              <div className={`${styles.input4} ${styles.input}`}>
                <div className={styles.inputname}>Phone Number</div>
                {/* <input type="password" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={phone} type="number" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{phone}</div>
                )}
              </div>
              <div className={`${styles.input5} ${styles.input}`}>
                <div className={styles.inputname}>City</div>
                {/* <input type="number" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={city} type="text" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{city}</div>
                )}
              </div>
              <div className={`${styles.input6} ${styles.input}`}>
                <div className={styles.inputname}>State</div>
                {/* <input type="text" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={state} type="text" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{state}</div>
                )}
              </div>

              <div className={styles.submitbtn}>
                {/* <Button type="text" isShape='oval' isColor='red' content='Save changes'></Button> */}
                {editMode ? (
                  <Button onClick={handleSaveClick} type="text" isShape='oval' isColor='red' content='Save changes'></Button>
                ) : (
                  <div onClick={handleEditClick} className={styles.editbtn}>Edit</div>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserInfo