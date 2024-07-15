// components/Sheet.js
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 100, editable: false },
  { field: 'name', headerName: 'Name', width: 200, editable: true },
  { field: 'description', headerName: 'Description', width: 300, editable: true },
  { field: 'quantity', headerName: 'Quantity', width: 150, editable: true },
];

// Sample initial rows with custom names and descriptions
const initialRows = [
  { id: 1, name: 'GRIDZ TRIANGLES 6" (TDBT)', description: '(6 PER SET)', quantity: 2 },
  { id: 2, name: 'MAG POLE', description: '-', quantity: 2 },
  { id: 3, name: 'AEROPOLE SYSTEM-SPLICE POLE', description: '(1 POLE)', quantity: 1 },
  { id: 4, name: 'MAG POLE', description: 'Red balloon 11"', quantity: 2 },
  { id: 5, name: 'MAG POLE', description: 'Red balloon 11"', quantity: 2 },
  { id: 6, name: 'MAG POLE', description: 'Red balloon 11"', quantity: 2 },
];

const Sheet = () => {
  const [rows, setRows] = useState(initialRows);

  // Function to handle search filtering (if needed)
  const handleSearch = (searchTerm) => {
    // Implement search functionality if required
    // Example: Filter rows based on search term
  };

  // Function to handle cell edits
  const handleEditCellChange = (updatedCell) => {
    const updatedRows = rows.map((row) =>
      row.id === updatedCell.id ? { ...row, [updatedCell.field]: updatedCell.value } : row
    );
    setRows(updatedRows);
  };

  // Function to save changes by making an API call
  const handleSaveChanges = async () => {
    try {
      // Send updated rows to backend to save changes
      const response = await axios.post('https://inventory-ruby-two.vercel.app/api/save-data', { rows });
      console.log('API Response:', response.data);
      // Handle success (e.g., show success message, update UI)
    } catch (error) {
      console.error('API Error:', error);
      // Handle error (e.g., show error message, revert changes)
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* Search input (if needed) */}
      {/* <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '16px', fontSize: '16px' }}
      /> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        editable={{
          onEditCellChange: handleEditCellChange,
        }}
      />
      <button onClick={handleSaveChanges} style={{ marginTop: '16px' }}>
        Save Changes
      </button>
    </div>
  );
};

export default Sheet;
