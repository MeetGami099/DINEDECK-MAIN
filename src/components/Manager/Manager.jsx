import React, { useState , useEffect } from "react";
import styles from "./Manager.module.css";
import Navbar2 from "../Navbar2/Navbar2";
import { apiConnector } from "../../services/apiconnector";
import { Link } from "react-router-dom";

async function find(setLoading , setUserData){
  setLoading(true);
  try{
    const response = await apiConnector(
      "get",
      "http://localhost:3000/api/v1/auth/Manager"
    );
    console.log(response);
    setUserData(response.data.user);
  }catch(err){
    console.log(err)
  }
  setLoading(false);
}
const Manager = () => {
 const [loading , setLoading] = useState(false);
 const [userData , setUserData] = useState(null);
 
 useState(()=>{
  find(setLoading , setUserData);
 },[])

  return (
    <>  {
    loading ? (<h1> Loading...</h1>) : (

<>

      
{
  userData===null?(<>Dana not Found</>):(

          
<div className={styles.mainDiv3}>
<Navbar2 userData={userData}></Navbar2>
<div className={styles.cont1}>
  <div className={styles.Line}></div>
  <div className={styles.Content}>
    <div className={styles.sub1}>
      <Link to="/Orders" className={styles.Buttons}>
        <div  className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Order</div>
      </Link>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-KOT.png" alt="" />
        </div>
        <div className={styles.buttonName}>KOTs</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-order.png" alt="" />
        </div>
        <div className={styles.buttonName}>Customers</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Expense</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Inventory</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Table</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Currency conversion</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Feedback</div>
      </button>
    </div>

    <div className={styles.sub2}>
      <div className={styles.item1}>
        Set the Configuration for your restaurant
      </div>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Menu</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Tax</div>
      </button>
      <button className={styles.Buttons}>
        <div className={styles.buttonIcon}>
          <img src="/Svg/manager-customers.png" alt="" />
        </div>
        <div className={styles.buttonName}>Discounts</div>
      </button>
    </div>
  </div>
</div>
</div>

  )
}
</>

    )
  }
  </>

  );
};

export default Manager;
