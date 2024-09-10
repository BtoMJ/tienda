import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/products/productsAction";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GiRunningShoe } from "react-icons/gi";
import { MdOutlineConstruction, MdDelete  } from "react-icons/md";

function Products(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);

    const { prod } = useSelector((state) => state.productsReducer);

    console.log("PRO", prod);

    return(
        <div className="item-dashboard-container">
            <div className='title-section'>
                <div className='title-section-icon'><GiRunningShoe /></div>
                <h1>Productos</h1>
            </div>
            <div className='section-tool'>
                <div className='search-container'>
                    <label>Buscar Producto:</label>
                    <input className='search-input' type='search' ></input>
                </div>
                <button className='btn-add'>Agregar Producto</button>
            </div>
            <div className='table-user'>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='th-table'>ID</TableCell>
                                <TableCell className='th-table' align="center">FOTO</TableCell>
                                <TableCell className='th-table' align="center">NOMBRE</TableCell>
                                <TableCell className='th-table' align="center">PRECIO</TableCell>
                                <TableCell className='th-table' align="center">ESTADO</TableCell>
                                <TableCell className='th-table' align="center">PROMOCIONES</TableCell>
                                <TableCell className='th-table' align="center"></TableCell>
                                <TableCell className='th-table' align="center"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            { prod.map((product) => (
                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{product.id}</TableCell>
                                    <TableCell align="center"><img src={product.image}/></TableCell>
                                    <TableCell align="center">{product.name}</TableCell>
                                    <TableCell align="center">{product.price}</TableCell>
                                    <TableCell align="center">{product.status}</TableCell>
                                    <TableCell align="center">{product.onSale}</TableCell>
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

export default Products;