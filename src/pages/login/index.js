import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/tarefas');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleSignupRedirect = () => {
        navigate('/cadastro');
    };

    return (
        <Box
            sx={{
            
            }}
        >
            <Box
                sx={{
                    
                }}
            >
                <Typography>Lista de Tarefas</Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit">
                        Login
                    </Button>
                    <Button
                        onClick={handleSignupRedirect}
                    >
                        Cadastro
                    </Button>
                </form>
                <Box
                    sx={{
                        
                    }}
                >
                </Box>
            </Box>
        </Box>
    );
}

export default Login;