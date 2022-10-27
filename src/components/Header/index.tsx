import { ActiveLink, Container, DivHeader, Logo, Nav } from "./styles";

export function Header(){

    return(
        <Container>
            <DivHeader>
               <Logo src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="Logo React" /> 
               <Nav>
                    <ActiveLink href='/'>
                        <a>Cadastrar</a>
                    </ActiveLink>
                    <ActiveLink href='/Listar' >
                        <a>Listar</a>
                    </ActiveLink>
               </Nav>
            </DivHeader>
        </Container>
    )
}