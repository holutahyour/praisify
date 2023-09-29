'use client'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', headerClassName: 'bg-gray-100', width: 70 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     flex: 1,
//     headerClassName: 'bg-gray-100',
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
//   { field: 'firstName', headerName: 'First name', headerClassName: 'bg-gray-100', width: 130 },
//   { field: 'lastName', headerName: 'Last name', headerClassName: 'bg-gray-100', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     headerClassName: 'bg-gray-100',
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

type Props = {
  columns: GridColDef[]
  rows: any
}

export default function DataTable({ columns, rows }: Props) {
  return (
    <div style={{ width: '100%', border: 'none' }}>
      <DataGrid
        sx={{ border: 'none' }}
        rows={rows}
        columns={columns}
      />
    </div>
  );
}
