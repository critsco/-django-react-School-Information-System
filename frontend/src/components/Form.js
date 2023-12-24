import axios from 'axios';
import { useEffect, useState } from 'react';
import AddModal from './AddModal';
import Button from './Button';
import EditModal from './EditModal';

function Form() {
  const [details, setDetails] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const selectedStudent = details.find(student => student.sid === selectedRowId);

  const fetchData = () => {
    axios.get('http://localhost:8000')
    .then(res => {
      setDetails(res.data);
    })
    .catch(err => { })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowAll = () => {
    setShowTable(true);
    fetchData();
  };
  const handleShowAdd = () => {
    setShowAdd(true);
  };
  const handleHideAdd = () => {
    setShowAdd(false);
  }
  const handleShowEdit = () => {
    if (selectedRowId !== null) {
      setShowEdit(true);
    } else {
      alert("Please select a row first.");
    }
  };
  const handleHideEdit = () => {
    setShowEdit(false);
  };
  const handleClear = () => {
    setShowTable(false);
    setSelectedRowId(null);
  };
  const handleRowClick = (id) => {
    setSelectedRowId(id);
    console.log(selectedRowId)
  }
  const handleDelete = (id) => {
    if (selectedRowId !== null) {
      console.log(`Deleting student with ID ${id}`);
      axios.delete(`http://localhost:8000/student/${id}`)
        .then(() => {
          setDetails(details.filter(student => student.sid !== id));
        })
        .catch(err => console.error(err));
    } else {
      alert("Please select a row first.")
    }
  };
   
  return (
    <div className=''>
      <div>
        <div>
          <form className='custom-container'>
            <div className='mt-5 flex gap-1'>
              <Button type="button" label="Show All" variant="bg-blue-900" onClick={handleShowAll} />
              <Button type="button" label="Add" variant="bg-blue-900" onClick={handleShowAdd} />
              <Button type="button" label="Edit" variant="bg-blue-900" onClick={handleShowEdit} />
              <Button type="button" label="Delete" variant="bg-blue-900" onClick={() => handleDelete(selectedRowId)} />
            </div>
          </form>
        </div>
      </div>

      <div className='mt-5'>
        {showTable && (
          <div className='flex-row gap-4'>
            <table className='table-auto border-collapse border border-gray-800'>
              <thead>
                <tr className='bg-blue-900 text-white'>
                  <th className='border border-gray-900 p-2'>ID</th>
                  <th className='border border-gray-900 p-2'>Name</th>
                  <th className='border border-gray-900 p-2'>Sex</th>
                  <th className='border border-gray-900 p-2'>Contact #</th>
                  <th className='border border-gray-900 p-2'>Address</th>
                  <th className='border border-gray-900 p-2'>Department</th>
                  <th className='border border-gray-900 p-2'>Course</th>
                  <th className='border border-gray-900 p-2'>Year Level</th>
                  <th className='border border-gray-900 p-2'>Section</th>
                </tr>
              </thead>
              <tbody>
                {details.map((student) => (
                  <tr key={student.sid} onClick={() => handleRowClick(student.sid)} className={`text-center cursor-pointer ${student.sid === selectedRowId ? 'bg-gray-300' : ''}`}>
                    <td className='border border-gray-950 px-2'>{student.sid}</td>
                    <td className='border border-gray-950 px-2'>{student.name}</td>
                    <td className='border border-gray-950 px-2'>{student.sex}</td>
                    <td className='border border-gray-950 px-2'>{student.contact}</td>
                    <td className='border border-gray-950 px-2'>{student.address}</td>
                    <td className='border border-gray-950 px-2'>{student.dept}</td>
                    <td className='border border-gray-950 px-2'>{student.course}</td>
                    <td className='border border-gray-950 px-2'>{student.year}</td>
                    <td className='border border-gray-950 px-2'>{student.section}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Button type="button" label="Clear" variant="bg-blue-900 mt-4" onClick={handleClear} />
            </div>
          </div>
        )}
      </div>

      <AddModal showAdd={showAdd} handleClose={handleHideAdd} fetchData={fetchData} />
      <EditModal showEdit={showEdit} handleClose={handleHideEdit} fetchData={fetchData} student={selectedStudent} />
    </div>
  )
}

export default Form;
