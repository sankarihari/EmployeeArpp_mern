import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <div>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontFamily: 'cursive', color: "red" }}>ID</TableCell>
                            <TableCell style={{ fontFamily: 'cursive', color: "red" }}>Name</TableCell>
                            <TableCell style={{ fontFamily: 'cursive', color: "red" }}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                    
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home