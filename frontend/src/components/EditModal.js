import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from "./Button";

function EditModal({ showEdit, handleClose, fetchData, student }) {
  const [formData, setFormData] = useState({
    sid: student?.sid || "",
    name: student?.name || "",
    sex: student?.sex || "",
    contact: student?.contact || "",
    address: student?.address || "",
    dept: student?.dept || "",
    course: student?.course || "",
    year: student?.year || "",
    section: student?.section || "",
  });

  useEffect(() => {
    setFormData({
      sid: student?.sid || "",
      name: student?.name || "",
      sex: student?.sex || "",
      contact: student?.contact || "",
      address: student?.address || "",
      dept: student?.dept || "",
      course: student?.course || "",
      year: student?.year || "",
      section: student?.section || "",
    });
  }, [student]);
 
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = {
      sid: formData.sid,
      name: formData.name,
      sex: formData.sex,
      contact: formData.contact,
      address: formData.address,
      dept: formData.dept,
      course: formData.course,
      year: formData.year,
      section: formData.section,
    };

    console.log(JSON.stringify(data))
   
    axios.put(`http://localhost:8000/student/${formData.sid}`, data)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
   
  return (
    showEdit && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={handleClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative max-w-2xl px-8 py-4 mx-auto bg-white rounded-md shadow-lg overflow-hidden">
            <h1 className="font-bold text-xl">Edit Student Info</h1>
            <div className='w-full bg-gray-300 h-[2px] mt-2'></div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="sid" className="font-medium ml-1">ID</label>
                    <input placeholder="ID" id="sid" name="sid" required type="text" className="text-sm border-2 border-gray-400 rounded-md w-32 px-2 py-1" value={formData.sid} onChange={handleInputChange} />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="name" className="font-medium ml-1">Name</label>
                    <input placeholder="Name" id="name" name="name" required type="text" className="text-sm border-2 border-gray-400 rounded-md px-2 py-1" value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="sex" className="font-medium ml-1">Sex</label>
                    <select name="sex" id="sex" className='rounded-md text-sm border-2 border-gray-400 px-2 py-1' value={formData.sex} onChange={handleInputChange}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
              </div>
              <div className="flex gap-2 mt-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="contact" className="font-medium ml-1">Contact #</label>
                    <input placeholder="Contact" id="contact" name="contact" type="text" className="text-sm border-2 border-gray-400 rounded-md w-32 px-2 py-1" value={formData.contact} onChange={handleInputChange} />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="address" className="font-medium ml-1">Address</label>
                    <input placeholder="Address" name='address' id="address" type="text" className="text-sm border-2 border-gray-400 w-72 rounded-md px-2 py-1" value={formData.address} onChange={handleInputChange} />
                  </div>
              </div>
              <div className="flex justify-between gap-2 mt-2">
                <div className="flex flex-col items-start">
                  <label htmlFor="dept" className="font-medium ml-1">Department</label>
                  <select name="dept" id="dept" required className='w-full rounded-md text-sm border-2 border-gray-400 px-2 py-1' value={formData.dept} onChange={handleInputChange}>
                    <option value="CSP">CSP</option>
                    <option value="BAP">BAP</option>
                    <option value="NP">NP</option>
                    <option value="CJEP">CJEP</option>
                    <option value="ETP">ETP</option>
                    <option value="TEP">TEP</option>
                    <option value="ASP">ASP</option>
                  </select>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="course" className="font-medium ml-1">Course</label>
                  <input placeholder="Course" id="course" name="course" type="text" required className="text-sm border-2 border-gray-400 rounded-md w-24 px-2 py-1" value={formData.course} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="year" className="font-medium ml-1">Year Level</label>
                  <select name="year" id="year" required className='w-full rounded-md text-sm border-2 border-gray-400 px-2 py-1' value={formData.year} onChange={handleInputChange}>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="section" className="font-semibold">Section</label>
                  <input placeholder="Section" id="section" name="section" type="text" required className="text-sm border-2 border-gray-400 rounded-md w-24 px-2 py-1" value={formData.section} onChange={handleInputChange} />
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button type="submit" label="Save" variant="bg-blue-900" />
                <Button type="button" label="Cancel" variant="bg-gray-400" onClick={handleClose} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
 }
 
 export default EditModal;