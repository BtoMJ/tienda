import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { 
            getBrands, 
            getBrandById, 
            getBrandsByName, 
        } 
from "../../../redux/brand/brandActions";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { SiPuma } from "react-icons/si";
import { MdOutlineConstruction, MdDelete  } from "react-icons/md";

function Brands(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
      }, [dispatch]);

    const { brands } = useSelector((state) => state.brandReducer);

    return(
        <div className="item-dashboard-container">
            <div className='title-section'>
                <div className='title-section-icon'><SiPuma /></div>
                <h1>Marcas</h1>
            </div>
            <div className='section-tool'>
                <div className='search-container'>
                    <label>Buscar Marca:</label>
                    <input className='search-input' type='search' ></input>
                </div>
                <button className='btn-add'>Agregar Marca</button>
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
                            { brands.map((brand) => (
                                <TableRow
                                    key={brand.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{brand.id}</TableCell>
                                    <TableCell align="center">{brand.name}</TableCell>
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

export default Brands;