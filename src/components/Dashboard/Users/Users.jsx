import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../redux/users/userActions";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HiUsers } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineConstruction, MdDelete  } from "react-icons/md";


import '../Dashboard.css';

function Users(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);

    const { users } = useSelector((state) => state.usersReducer);

    return(
        <div className="item-dashboard-container">
            <div className='title-section'>
                <div className='title-section-icon'><HiUsers /></div>
                <h1>Usuarios</h1>
            </div>
            <div className='section-tool'>
                <div className='search-container'>
                    <label>Buscar Usuario:</label>
                    <input className='search-input' type='search' ></input>
                </div>
                <button className='btn-add'>Agregar Usuario</button>
            </div>
            <div className='table-user'>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='th-table'>ID</TableCell>
                                <TableCell className='th-table' align="center">FOTO</TableCell>
                                <TableCell className='th-table' align="center">NOMBRE</TableCell>
                                <TableCell className='th-table' align="center">APELLIDO</TableCell>
                                <TableCell className='th-table' align="center">CORREO</TableCell>
                                <TableCell className='th-table' align="center">PASSWORD</TableCell>
                                <TableCell className='th-table' align="center">TIPO</TableCell>
                                <TableCell className='th-table' align="center"></TableCell>
                                <TableCell className='th-table' align="center"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            { users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{user.id}</TableCell>
                                    {/* <TableCell align="center"><img src={user.profileImg}/></TableCell> */}
                                    <TableCell align="center"><FaUserCircle className='pic-profile' /></TableCell>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.surname}</TableCell>
                                    <TableCell align="center">{user.mail}</TableCell>
                                    <TableCell align="center">{user.password}</TableCell>
                                    <TableCell align="center">{user.userType}</TableCell>
                                    <TableCell align="center"><button className='btn-edit'><MdOutlineConstruction /></button></TableCell>
                                    <TableCell align="center"><button className='btn-erase'><MdDelete /></button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )
}

export default Users;