import React,{useState,useEffect} from "react";
import axios from "axios";
import "./style.css";
import Pagination from "../../../components/Pagination";
const listType=[
  {
    id:1,
    type: "admin",
    name: "Quản trị viên",
  },
  {
    id:2,
    type: "nhanvien",
    name: "Nhân viên",
  },
];
const Accounts = () => {
  const [listAccount,setlistAccount]=useState([]);
  const [account,setAccount] = useState({
    username:"",
    name:"",
    type:"admin",
    email:"",
  });
  const {username,name,type,email}= account;
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 3,
    perpage: 4,
    start: 0,
    total: listAccount.length,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  const handleInputChange=(e)=>
  {
     e.preventDefault();
     let { name, value }=e.target;
     setAccount({...account,[name]: value });
     console.log(account.username + "," + account.name+"," + account.type+"," + account.email );
  };

  const handleAdd = async (e) => {
    console.log(account.type);
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/security/admin/addAdmin",
        account,
        {
          headers: {
            token: JSON.parse(localStorage.getItem('admin')).token,
          }
        },
      );
      alert("Thêm thành công. Mật khẩu mặc định là 123");
      setAccount({
        username:"",
        name:"",
        type:"admin",
        email:"",
      });
    } catch (error) {
      alert("Thêm thất bại!");
    }
   
    fetchListAccount();
  };

  const fetchListAccount= async()=>{
    try {
      const res = await axios.get(
          `http://localhost:5000/api/v1/security/admin/getAllEmployee`
        );
      setlistAccount(res.data);
      console.log(res.data);
  } catch (error) {
      console.log('fail to get listAccount', error.message)
  }
  };

 useEffect(()=>{
   fetchListAccount();
 },[]);
 useEffect(() => {}, [listAccount]);
 const deleteRecord = async (id) =>
 {
   console.log(id);
   await axios.delete(`http://localhost:5000/api/v1/security/admin/deleteAdmin/${id}`,
   {
    headers: {
      token: JSON.parse(localStorage.getItem('admin')).token,
    }
  },
   )
   .then((result)=>{
    fetchListAccount();
    alert('Xoá thành công!');
   })
   .catch(()=>{
     alert('Error in the Code!');
   });
 };
  return (
    <div>
      <h2 className="page-header">Quản lí tài khoản</h2>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card__header1">
              <h3>Quản lí tài khoản</h3>
            </div>
            <div className="card__body">
              <form>
                <div className="form-group">
                  <lable>Tên đăng nhập</lable>
                  <input type="text" className="form-control" name="username" value={username} onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                  <lable>Tên tài khoản</lable>
                  <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                  <lable>Loại tài khoản</lable>
                  <select className="form-control" name="type" value={type} onChange={handleInputChange} defaultValue='admin'>
                    {
                      listType.map((item)=> {
                         return(<option key={item.id} value={item.type}>
                                {item.name}
                                </option>);})
                    }
                  </select>
                </div>
                <div className="form-group">
                  <lable>Email</lable>
                  <input type="email" className="form-control" name="email" value={email} onChange={handleInputChange}></input>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="buttonform" onClick={handleAdd}>
                      Thêm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__header1">
              <h3>Danh sách tài khoản nhân viên</h3>
            </div>
            <div className="input-group mb-4 mt-3">
               <div className="form-outline">
                   <input type="text" id="form1" className="form-control" placeholder="Tìm kiếm" style={{backgroundColor:"#ececec"}}/>
               </div>
               <button type="button"  className="btn btn-success">
                   <i className="fa fa-search" aria-hidden="true"></i>
               </button>
            </div>  
            <div className="card__body">
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Tên đăng nhập</td>
                                <td>Tên tài khoản</td>
                                <td>Loại tài khoản</td>
                                <td>email</td>
                                <td>Xoá</td>                     
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listAccount
                                .slice(pagination.start, pagination.perpage)
                                .map((item) => (
                                  <tr key={item.index}>
                                    <td>{item.username}</td>
                                    <td>{item.name}</td>
                                    <td>{item.type==='admin'? "Quản trị viên":"Nhân viên"}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => {
                                            const confirmBox = window.confirm(
                                              "Bạn chắc chắn muốn xoá "+ item.name
                                            )
                                            if (confirmBox === true) {
                                              deleteRecord(item.id)
                                            }
                                          }}> <i className="far fa-trash-alt" style={{fontSize:"18px"}}></i> </button>
                                    </td>
                                  </tr>
                                ))                              
                            }
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
            <div className="locatepage col-4">
              <Pagination
               pagination={pagination}
               listCart={listAccount}
               setPagination={setPagination}
             />
            </div>                                
          </div>
        </div>
        </div>
      </div>
  );
};

export default Accounts;
