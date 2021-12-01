import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditCategory =()=>{
    let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { id } = useParams();
    console.log(id);
    const [newCate,setnewCate]=useState(
        {  
           name: "",
           img_url: "",
       });
       const {name,img_url} =newCate;
      const handelupdateCategory = async (e) => {
        e.preventDefault();
        console.log(newCate);
        await axios.put(`http://localhost:5000/api/v1/category/updateCategory/${id}`, newCate,
        {
          headers: {
            token: JSON.parse(localStorage.getItem('admin')).token,
          }
        },
        );
        alert("Cập nhật thành công");
        setnewCate({
            name: "",
            img_url: "",
        })
        history.push("/admin/categorys");
      };
     
      const loadnewCate =  async () => {
        try {
            const res = await axios.get(
              `http://localhost:5000/api/v1/category/detail/${id}`
            );
            setnewCate(res.data);
            console.log(res.data);
          } catch (error) {
            console.log("fail to get category", error.message);
          }
      };
      useEffect(() => {
        loadnewCate();
      }, []);
      const handleInputChange=(e)=>
        {
           e.preventDefault();
           let { name, value }=e.target;
           setnewCate({...newCate,[name]: value });
           console.log(id + "," + newCate.name+", " + newCate.img_url);
        };
      return(
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card__header1">
                        <h3>Update danh mục</h3>
                    </div>
                    <div className="card__body">
                    <form action="" autoComplete="off"> 
                        <div className="form-group">
                            <lable>Mã danh mục</lable>
                            <input type="number" className="form-control" name="id" value={id} onChange={handleInputChange} readOnly></input>
                        </div>
                        <div className="form-group">
                            <lable>Tên danh mục</lable>
                            <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange}></input>
                        </div>
                        <div className="form-group">
                            <lable>UrlImage</lable>
                            <input type="text" className="form-control" name="img_url" value={img_url} onChange={handleInputChange} />
                        </div>
                        <div className="row">
                            <div className="col-12"> 
                                <button type="submit" className="buttonform" onClick={handelupdateCategory} >Cập nhật</button>  
                            </div>
                        </div>                                                                          
                    </form>   
                    </div>
                </div>
            </div>
        </div>
      );
}
export default EditCategory;