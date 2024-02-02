import axios from "axios";

const addcontact = async (formData) => {
  try {
    const token = localStorage.getItem('authToken');
    const res = await axios.post('http://localhost:2000/api/v1/contacts', formData, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

const editcontact = async (formData, contactId) => {
  try {
    const token = localStorage.getItem('authToken');
    const res = await axios.put(`http://localhost:2000/api/v1/contacts/${contactId}`, formData, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error editing contact:', error);
    throw error;
  }
};

const getcontact = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const res = await axios.get('http://localhost:2000/api/v1/contacts', {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error getting contact:', error);
    throw error;
  }
};

const deletecontact = async (contactId) => {
  try {
    const token = localStorage.getItem('authToken');
    const res = await axios.delete(`http://localhost:2000/api/v1/contacts/${contactId}`, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

const getuserdetails = async () => {
  try {
    const token = localStorage.getItem(`authToken`);
    const res = await axios.get(`http://localhost:2000/api/v1/auth`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

export { getuserdetails, addcontact, editcontact, getcontact, deletecontact };
