import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/tarefas');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                
            }}
        >
            <Box
                component="form"
                onSubmit={handleSignup}
                sx={{
                    
                }}
            >
                <Typography >Cadastro</Typography>
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
                    Cadastrar
                </Button>
                <Button onClick={handleBack}>
                    Voltar
                </Button>
                <Box
                    sx={{
                    
                    }}
                >
                </Box>
            </Box>
        </Box>
    );
}

export default Cadastro;