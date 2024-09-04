import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import Tarefa from '../../components/tarefas';
import { db } from '../../firebaseConnections';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';

const q = query(collection(db, 'tarefas'), orderBy('timestamp', 'desc'));

function Tarefas() {
    const [Tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTarefas(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })));
        });
        return () => unsubscribe();
    }, [input]);

    const addTarefa = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;
        addDoc(collection(db, 'tarefas'), {
            tarefa: input,
            timestamp: serverTimestamp(),
            createdBy: user ? user.email : 'unknown'
        });
        setInput('');
    };

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Logged out successfully");
        }).catch((error) => {
            console.error("Error logging out: ", error);
        });
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
                <Typography >Lista de Tarefas</Typography>
                <form onSubmit={addTarefa}>
                    <TextField
                        id="outlined-basic"
                        label="Inserir Tarefa"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <Button type="submit">
                        Adicionar Tarefa
                    </Button>
                </form>
                <Box sx={{ marginTop: 2 }}>
                    <ul>
                        {Tarefas.map(item => <Tarefa key={item.id} arr={item} />)}
                    </ul>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Button onClick={handleLogout}>
                        Sair
                    </Button>
                </Box>
                <Box
                    sx={{
                    }}
                >
                </Box>
            </Box>
        </Box>
    );
}

export default Tarefas;