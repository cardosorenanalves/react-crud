import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface Props{
    userCode: number
    isOpenProps: boolean;
    onCloseProps: ()=> void;
    editUser: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function EditModal({isOpenProps, onCloseProps, userCode, editUser}: Props){
    const [newName, setNewName] = useState<string>('')
    const baseURL = 'http://localhost:8080/clientes'

    function handleRegisterNewName(){
        if(newName != ''){
            try{
            axios
                .post(baseURL, {
                    id: userCode,
                    name: newName
                })
                .then((response) => {
                response.status === 200 ? 
                  toast.success("Cadastrado com Sucesso!!") 
                  : toast.error('Algo deu errado, tente novamente!')
                })
                setNewName('');
                editUser(true);
                onCloseProps();
            }catch(err){
        }
    }else{
        toast.error('Insira seu nome!')
    }
    }

    return(
        <Dialog open={isOpenProps} onClose={onCloseProps} >
      <DialogTitle
        style={{
          backgroundColor: '#004A8A',
          color: '#FFF',
          height: 60,
        }}
      >
        <strong>Editar Nome</strong>
        <IconButton
          aria-label="close"
          style={{
            color: 'white',
            marginTop: -10,
            position: 'absolute',
            right: 10,
          }}
          onClick={onCloseProps}
        >
          <AiOutlineClose />
        </IconButton>
      </DialogTitle>

      <DialogContent
        style={{
          width: 450,
          maxWidth: '100%',
        }}
      >
        <TextField
          label='Nome do Usuário'
          style={{
            marginTop: 25,
            width: '100%',
          }}
          variant='standard'
          value={newName}
          onChange={(e) => {setNewName(e.target.value)}}
        />
                <DialogActions>
          <Button 
           style={{color: '#004A8A', marginTop: '5px'}}
          onClick={() => {handleRegisterNewName()}}>
            {' '}
            {'Salvar'}{' '}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
    )
}