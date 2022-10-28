import  React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import { User } from '../../Pages/Listar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { EditModal } from '../EditModal';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#004A8A',
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export interface Props{
    users: User[];
    deleteUser: React.Dispatch<React.SetStateAction<boolean>>;
    editUser: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function CustomizedTables({users, deleteUser, editUser}: Props) {
  const baseURL = 'http://localhost:8080/clientes'
  const [userCode, setUserCode] = useState<number>(0)
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleExcludeUser(id: number){
    axios
    .delete(`${baseURL}/${id}`)
    .then((response) => {
      response.status === 200 ? 
        toast.success("Deletado com Sucesso!!") 
        : toast.error('Algo deu errado, tente novamente!')
      })
      deleteUser(true);
  }

  function handleEditUser(id: number){
    setUserCode(id)
    setOpenModal(true)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome de Usuário</StyledTableCell>
            <StyledTableCell align="center">Editar Usuário</StyledTableCell>
            <StyledTableCell align="center">Excluir Usuário</StyledTableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item : User) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                <AiFillEdit
                size={25}
                style={{cursor: 'pointer'}}
                onClick={()=> handleEditUser(item.id)}
                />
                </StyledTableCell>
              <StyledTableCell align="center">
                <BsFillTrashFill
                size={25}
                style={{cursor: 'pointer'}}
                onClick={()=> handleExcludeUser(item.id)}
                />
                </StyledTableCell>
              
       
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <EditModal
      userCode={userCode}
      isOpenProps={openModal}
      onCloseProps={()=> setOpenModal(false)}
      editUser={editUser}
      />
    </TableContainer>
  );
}
