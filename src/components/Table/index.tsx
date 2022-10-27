import  React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {BsFillTrashFill} from 'react-icons/bs'
import { User } from '../../Pages/Listar';
import axios from 'axios';
import { toast } from 'react-toastify';

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
}

export default function CustomizedTables({users, deleteUser}: Props) {
  const baseURL = 'http://localhost:8080/clientes'

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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome de Usuário</StyledTableCell>
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
    </TableContainer>
  );
}
