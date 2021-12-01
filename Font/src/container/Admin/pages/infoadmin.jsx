import React, { useState,useEffect } from 'react'
import axios from 'axios';
const InfoAdmin = () => {
    const [info,setInfo] =useState(
    {username:"",
    type:"",
    name:"",
    email:"",
    },
    )
    const {username,name,type,email}= info;
    const handleInputChange=(e)=>
  {
     e.preventDefault();
     let { name, value }=e.target;
     setInfo({...info,[name]: value });
     console.log(info.username + "," + info.name+"," + info.type+"," + info.email );
  };
    const data = JSON.parse(localStorage.getItem("admin")).admin;
    const handelupdateInfo = async (e) => {
        e.preventDefault();
        console.log(info);
        await axios.put(`http://localhost:5000/api/v1/security/admin/updateAdmin/${data.id}`, 
        info,
        {
          headers: {
            token: JSON.parse(localStorage.getItem('admin')).token,
          }
        },
        );
        alert("Cập nhật thành công");
      };
      const loadnewInfo =  async () => {
          console.log(data.id);
        try {
            const res = await axios.get(
              `http://localhost:5000/api/v1/security/admin/detailAdmin/${data.id}`
            );
            setInfo(res.data);
            console.log(res.data);
          } catch (error) {
            console.log("fail to get info", error.message);
          }
      };
      useEffect(() => {
        loadnewInfo();
      }, []);
    return (
        <div>
            <h2 className="page-header">
                Thông tin tài khoản
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card__header1">
                            <h3>Thông tin tài khoản</h3>
                        </div>
                        <div className="card__body">
                            <form>
                                <div className="form-group">
                                    <lable>Tên đăng nhập</lable>
                                    <input type="text" className="form-control" name="username" value={username} readOnly onChange={handleInputChange}></input>
                                </div>
                                <div className="form-group">
                                    <lable>Loại tài khoản</lable>
                                    <input type="text" className="form-control" name="type" value={type} readOnly onChange={handleInputChange}></input>
                                </div>   
                                <div className="form-group">
                                    <lable>Tên tài khoản</lable>
                                    <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange}></input>
                                </div>
                                <div className="form-group">
                                    <lable>Email</lable>
                                    <input type="email" className="form-control" name="email" value={email} onChange={handleInputChange}></input>
                                </div>        
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="buttonform" onClick={handelupdateInfo}>Thay đổi thông tin</button>
                                    </div>
                                </div>                                                                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoAdmin
