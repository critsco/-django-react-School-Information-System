import axios from 'axios';
import Button from "./Button";

function AddModal({ showAdd, handleClose, fetchData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = {
      sid: document.getElementById('sid').value,
      name: document.getElementById('name').value,
      sex: document.getElementById('sex').value,
      contact: document.getElementById('contact').value,
      address: document.getElementById('address').value,
      dept: document.getElementById('dept').value,
      course: document.getElementById('course').value,
      year: document.getElementById('year').value,
      section: document.getElementById('section').value
    };

    console.log(JSON.stringify(data))
   
    axios.post('http://localhost:8000/', data)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
   
  return (
    showAdd && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={handleClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative max-w-2xl px-8 py-8 mx-auto bg-white rounded-md shadow-lg overflow-hidden">
            <h1 className="font-bold text-xl">Add Student</h1>
            <div className='w-full bg-gray-300 h-[2px] mt-2'></div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="sid" className="font-medium ml-1">ID</label>
                    <input placeholder="ID" id="sid" name="sid" type="text" required className="text-sm border-2 border-gray-400 rounded-md w-32 px-2 py-1" />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="name" className="font-medium ml-1">Name</label>
                    <input placeholder="Name" id="name" name="name" type="text" required className="text-sm border-2 border-gray-400 rounded-md px-2 py-1" />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="sex" className="font-medium ml-1">Sex</label>
                    <select name="sex" id="sex" className='rounded-md text-sm border-2 border-gray-400 px-2 py-1'>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
              </div>
              <div className="flex gap-2 mt-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="contact" className="font-medium ml-1">Contact #</label>
                    <input placeholder="Contact" id="contact" name="contact" type="text"
                    className="text-sm border-2 border-gray-400 rounded-md w-32 px-2 py-1" />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="address" className="font-medium ml-1">Address</label>
                    <input placeholder="Address" name='address' id="address" type="text" className="text-sm border-2 border-gray-400 w-72 rounded-md px-2 py-1" />
                  </div>
              </div>
              <div className="flex justify-between gap-2 mt-2">
                <div className="flex flex-col items-start">
                  <label htmlFor="dept" className="font-medium ml-1">Department</label>
                  <select name="dept" id="dept" required className='w-full rounded-md text-sm border-2 border-gray-400 px-2 py-1'>
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
                  <input placeholder="Course" id="course" name="course" type="text" required className="text-sm border-2 border-gray-400 rounded-md w-24 px-2 py-1" />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="year" className="font-medium ml-1">Year Level</label>
                  <select name="year" id="year" required className='w-full rounded-md text-sm border-2 border-gray-400 px-2 py-1'>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="section" className="font-medium ml-1">Section</label>
                  <input placeholder="Section" id="section" name="section" type="text" required className="text-sm border-2 border-gray-400 rounded-md w-24 px-2 py-1" />
                </div>
              </div>
              <div className="mt-8 flex gap-2">
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
 
 export default AddModal;