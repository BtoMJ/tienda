import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../redux/category/categoriesActions";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { MdCategory } from "react-icons/md";
import { MdOutlineConstruction, MdDelete  } from "react-icons/md";

function Categories(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
      }, [dispatch]);

    const { categories } = useSelector((state) => state.categoriesReducer);

    return(
        <div className="item-dashboard-container">
            <div className='title-section'>
                <div className='title-section-icon'><MdCategory /></div>
                <h1>Categorías</h1>
            </div>
            <div className='section-tool'>
                <div className='search-container'>
                    <label>Buscar Categoría:</label>
                    <input className='search-input' type='search' ></input>
                </div>
                <button className='btn-add'>Agregar Categoría</button>
            </div>
            <div className='table-user'>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='th-table'>ID</TableCell>
                                <TableCell className='th-table' align="center">NOMBRE</TableCell>
                                <TableCell className='th-table' align="center"></TableCell>
                                <TableCell className='th-table' align="center"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            { categories.map((cat) => (
                                <TableRow
                                    key={cat.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{cat.id}</TableCell>
                                    <TableCell align="center">{cat.name}</TableCell>
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

export default Categories;