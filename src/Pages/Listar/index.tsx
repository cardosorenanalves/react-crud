import axios from "axios";
import { useEffect, useState } from "react";
import  CustomizedTables from "../../components/Table";
import {
    Container,
    Title,
    DivTable,
    Content,
} from './styles'

export interface User{
    id: number;
    name: string;
}

export function Listar(){
    const [users, setUsers] = useState<User[]>([])
    const [deleteUser, setDeletUser] = useState<boolean>(false)
    const [editUser, setEditUser] = useState<boolean>(false)
    const baseURL = 'http://localhost:8080/clientes'

    useEffect(()=> {
      handleGetUsers()
    },[])

    useEffect(()=> {
        if(deleteUser === true){
            handleGetUsers()
            setDeletUser(false)
        }
    },[deleteUser])

    useEffect(()=> {
        if(editUser === true){
            handleGetUsers()
            setEditUser(false)
        }
    },[editUser])

    function handleGetUsers(){
        axios.get(baseURL).then((response) => {
            setUsers(response.data);
          });
    }
    return(
       <Container>
        <Content>
        <Title>
            Listagem de Usuários
        </Title>
        <DivTable>
            <CustomizedTables 
            users={users}
            deleteUser={setDeletUser}
            editUser={setEditUser}
            />
        </DivTable>
        </Content>
       </Container>
    )
}